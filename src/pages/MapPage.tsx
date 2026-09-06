import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  X,
  Crosshair,
  Save,
} from "lucide-react";
import {
  INFRA_TYPE_INFO,
  type InfraType,
  type RiskCategory,
  type Priority,
} from "@/lib/types";
import type { Id } from "@/convex/_generated/dataModel";
import { getRiskColor, getPriorityColor } from "@/lib/risk-engine";

// Leaflet CSS — imported at module level so it's available when MapContainer mounts
import "leaflet/dist/leaflet.css";

// Fix default marker icon paths broken by Vite bundling
import L from "leaflet";
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

const RISK_MARKER_COLORS: Record<string, string> = {
  LOW: "#22c55e",
  MODERATE: "#f59e0b",
  HIGH: "#f97316",
  CRITICAL: "#ef4444",
};

interface MapAssetData {
  assetDocId: Id<"assets">;
  assetId: string;
  infraType: InfraType;
  location: string;
  latitude: number;
  longitude: number;
  status: string;
  riskCategory: RiskCategory;
  priority: Priority;
  riskScore: number;
}

// ---------------------------------------------------------------------------
// Helper: re-center map when selected asset changes
// ---------------------------------------------------------------------------

function FlyToAsset({ center }: { center: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, Math.max(map.getZoom(), 14), { duration: 0.8 });
    }
  }, [center, map]);
  return null;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function MapPage() {
  const { user } = useAuth();
  const updateAsset = useMutation(api.assets.update);

  const [selected, setSelected] = useState<MapAssetData | null>(null);
  const [editingCoords, setEditingCoords] = useState(false);
  const [editLat, setEditLat] = useState("");
  const [editLng, setEditLng] = useState("");
  const [saving, setSaving] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false); // mobile drawer

  const assets = useQuery(
    api.assets.list,
    user?._id ? { userId: user._id } : "skip"
  );
  const riskAssessments = useQuery(
    api.inspections.listRiskByUser,
    user?._id ? { userId: user._id } : "skip"
  );

  const isLoading = assets === undefined || riskAssessments === undefined;

  // Build map data from real records
  const geoAssets: MapAssetData[] = (assets ?? [])
    .filter((a) => a.latitude != null && a.longitude != null)
    .map((asset) => {
      const latestRisk = (riskAssessments ?? [])
        .filter((r) => r.assetId === asset._id)
        .sort((a, b) => b.createdAt - a.createdAt)[0];
      return {
        assetDocId: asset._id,
        assetId: asset.assetId,
        infraType: asset.infraType as InfraType,
        location: asset.location ?? "",
        latitude: asset.latitude!,
        longitude: asset.longitude!,
        status: asset.status,
        riskCategory: (latestRisk?.riskCategory as RiskCategory) ?? "LOW",
        priority: (latestRisk?.priority as Priority) ?? "P4",
        riskScore: latestRisk?.riskScore ?? 0,
      };
    });

  // Assets without coordinates (need editing)
  const noCoordAssets = (assets ?? []).filter(
    (a) => a.latitude == null || a.longitude == null
  );

  const hasGeoData = geoAssets.length > 0;

  // Default center: first geo asset, or San Francisco
  const defaultCenter: [number, number] = hasGeoData
    ? [geoAssets[0].latitude, geoAssets[0].longitude]
    : [37.7749, -122.4194];

  const defaultZoom = hasGeoData ? 12 : 10;

  // Selected asset's risk assessments
  const selectedRisks = selected
    ? (riskAssessments ?? [])
        .filter((r) => r.assetId === selected.assetDocId)
        .sort((a, b) => b.createdAt - a.createdAt)
    : [];

  // Fly-to target
  const flyTarget: [number, number] | null = selected
    ? [selected.latitude, selected.longitude]
    : null;

  // Save coordinates
  const handleSaveCoords = async () => {
    if (!selected) return;
    const lat = parseFloat(editLat);
    const lng = parseFloat(editLng);
    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      return;
    }
    setSaving(true);
    try {
      await updateAsset({
        id: selected.assetDocId,
        latitude: lat,
        longitude: lng,
      });
      // Update local state
      setSelected({
        ...selected,
        latitude: lat,
        longitude: lng,
      });
      setEditingCoords(false);
    } finally {
      setSaving(false);
    }
  };

  const startEditingCoords = (asset?: MapAssetData) => {
    const target = asset ?? selected;
    if (!target) return;
    setEditLat(target.latitude?.toString() ?? "");
    setEditLng(target.longitude?.toString() ?? "");
    setEditingCoords(true);
  };

  const handleSelectAsset = (asset: MapAssetData) => {
    setSelected(asset);
    setEditingCoords(false);
    setDetailOpen(true);
  };

  return (
    <AppShell>
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
        {/* Header */}
        <header className="mb-6 md:mb-8 flex items-start justify-between">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Visualization
              </p>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Risk Map
              </h1>
            </div>
          </div>
          {!isLoading && !hasGeoData && (
            <Badge
              variant="outline"
              className="text-[11px] bg-amber-500/10 text-amber-400 border-amber-500/20"
            >
              {noCoordAssets.length > 0
                ? `${noCoordAssets.length} asset(s) need coordinates`
                : "No assets with coordinates"}
            </Badge>
          )}
        </header>

        <div className="grid gap-4 md:gap-5 xl:grid-cols-[1fr_380px]">
          {/* Map */}
          <Card className="bg-card border-border/60 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative" style={{ height: "min(70vh, 600px)" }}>
                <MapContainer
                  center={defaultCenter}
                  zoom={defaultZoom}
                  className="w-full h-full rounded-xl"
                  zoomControl={true}
                  attributionControl={true}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {/* Fly-to when selecting a marker */}
                  <FlyToAsset center={flyTarget} />

                  {/* Asset markers */}
                  {geoAssets.map((asset) => {
                    const color =
                      RISK_MARKER_COLORS[asset.riskCategory] ??
                      RISK_MARKER_COLORS.LOW;
                    const isSelected =
                      selected?.assetDocId === asset.assetDocId;
                    return (
                      <CircleMarker
                        key={asset.assetDocId}
                        center={[asset.latitude, asset.longitude]}
                        radius={isSelected ? 10 : 7}
                        pathOptions={{
                          color: color,
                          fillColor: color,
                          fillOpacity: isSelected ? 0.9 : 0.7,
                          weight: isSelected ? 3 : 2,
                          opacity: isSelected ? 1 : 0.8,
                        }}
                        eventHandlers={{
                          click: () => handleSelectAsset(asset),
                        }}
                      >
                        <Popup className="dark-popup">
                          <div
                            className="text-sm font-semibold"
                            style={{ color: "#1a1a2e" }}
                          >
                            {asset.assetId}
                          </div>
                          <div
                            className="text-xs capitalize"
                            style={{ color: "#555" }}
                          >
                            {INFRA_TYPE_INFO[asset.infraType]?.icon}{" "}
                            {INFRA_TYPE_INFO[asset.infraType]?.label}
                          </div>
                          {asset.location && (
                            <div
                              className="text-xs mt-1"
                              style={{ color: "#777" }}
                            >
                              📍 {asset.location}
                            </div>
                          )}
                          <div className="mt-2 flex items-center gap-2">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                              style={{ backgroundColor: color }}
                            >
                              {asset.riskCategory}
                            </span>
                            <span className="text-xs font-semibold">
                              Score: {asset.riskScore}
                            </span>
                          </div>
                          <div
                            className="text-xs mt-1"
                            style={{ color: "#555" }}
                          >
                            Priority: {asset.priority}
                          </div>
                        </Popup>
                      </CircleMarker>
                    );
                  })}
                </MapContainer>

                {/* Legend */}
                <div className="absolute bottom-3 left-3 z-[1000] bg-white/95 dark:bg-[oklch(0.17_0.012_260)]/95 backdrop-blur-sm rounded-xl border border-black/10 dark:border-border/40 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Risk Level
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { label: "Critical", color: "#ef4444" },
                      { label: "High", color: "#f97316" },
                      { label: "Moderate", color: "#f59e0b" },
                      { label: "Low", color: "#22c55e" },
                    ].map((l) => (
                      <div key={l.label} className="flex items-center gap-2">
                        <span
                          className="size-2.5 rounded-full shrink-0"
                          style={{ background: l.color }}
                        />
                        <span className="text-[11px] text-muted-foreground">
                          {l.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Loading overlay */}
                {isLoading && (
                  <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-background/60">
                    <p className="text-sm text-muted-foreground">
                      Loading map data…
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Detail Panel — desktop always visible, mobile toggleable */}
          <div className="space-y-4">
            {selected ? (
              <>
                <Card className="bg-card border-border/60">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base text-foreground">
                          {selected.assetId}
                        </CardTitle>
                        <p className="text-[11px] text-muted-foreground capitalize mt-0.5">
                          {INFRA_TYPE_INFO[selected.infraType]?.icon}{" "}
                          {INFRA_TYPE_INFO[selected.infraType]?.label}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelected(null);
                          setEditingCoords(false);
                        }}
                        className="size-8 p-0 text-muted-foreground hover:text-foreground"
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 shrink-0" />
                      {selected.location || "No location specified"}
                    </div>

                    {/* Risk Score + Priority */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-surface-2 p-3 text-center border border-border/30">
                        <p className="text-2xl font-bold text-foreground">
                          {selected.riskScore}
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Risk Score
                        </p>
                      </div>
                      <div className="rounded-xl bg-surface-2 p-3 text-center border border-border/30 flex flex-col items-center justify-center">
                        <Badge
                          variant="outline"
                          className={`text-sm font-bold border-0 ${getPriorityColor(
                            selected.priority
                          )}`}
                        >
                          {selected.priority}
                        </Badge>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                          Priority
                        </p>
                      </div>
                    </div>

                    <Badge
                      variant="outline"
                      className={`w-full justify-center text-sm font-bold border-0 ${getRiskColor(
                        selected.riskCategory
                      )}`}
                    >
                      {selected.riskCategory} RISK
                    </Badge>

                    {/* Coordinates display / edit */}
                    {editingCoords ? (
                      <div className="rounded-xl border border-border/40 bg-surface-2 p-3 space-y-3">
                        <p className="text-xs font-semibold text-foreground">
                          Set Coordinates
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <Label className="text-[10px] text-muted-foreground">
                              Latitude
                            </Label>
                            <Input
                              type="number"
                              step="any"
                              value={editLat}
                              onChange={(e) => setEditLat(e.target.value)}
                              placeholder="37.7749"
                              className="h-8 text-xs bg-background border-border/60"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-[10px] text-muted-foreground">
                              Longitude
                            </Label>
                            <Input
                              type="number"
                              step="any"
                              value={editLng}
                              onChange={(e) => setEditLng(e.target.value)}
                              placeholder="-122.4194"
                              className="h-8 text-xs bg-background border-border/60"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={handleSaveCoords}
                            disabled={saving}
                            className="flex-1 gap-1.5 h-8 text-xs"
                          >
                            <Save className="size-3" />
                            {saving ? "Saving…" : "Save"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingCoords(false)}
                            className="h-8 text-xs"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between rounded-xl border border-border/40 bg-surface-2 p-3">
                        <div>
                          <p className="text-[10px] font-semibold text-muted-foreground">
                            Coordinates
                          </p>
                          <p className="text-xs font-mono text-foreground mt-0.5">
                            {selected.latitude.toFixed(5)},{" "}
                            {selected.longitude.toFixed(5)}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => startEditingCoords()}
                          className="gap-1.5 h-8 text-xs text-primary"
                        >
                          <Crosshair className="size-3" />
                          Edit
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Risk Assessment history */}
                {selectedRisks.length > 0 && (
                  <Card className="bg-card border-border/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold text-foreground">
                        Risk Assessments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedRisks.slice(0, 3).map((risk) => (
                          <div
                            key={risk._id}
                            className="rounded-xl border border-border/40 bg-surface-2 p-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] text-muted-foreground">
                                {new Date(
                                  risk.createdAt
                                ).toLocaleDateString()}
                              </span>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="outline"
                                  className={`text-[10px] font-bold border-0 ${getRiskColor(
                                    risk.riskCategory as RiskCategory
                                  )}`}
                                >
                                  {risk.riskScore}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className={`text-[10px] border-0 ${getPriorityColor(
                                    risk.priority as
                                      | "P1"
                                      | "P2"
                                      | "P3"
                                      | "P4"
                                  )}`}
                                >
                                  {risk.priority}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
                              {risk.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card className="bg-card border-border/60">
                <CardContent className="py-16 text-center">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-3 mx-auto mb-3">
                    <MapPin className="size-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    Select an asset
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Click a marker on the map to view details
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Assets without coordinates — quick-add section */}
            {!isLoading && noCoordAssets.length > 0 && (
              <Card className="bg-card border-border/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-foreground">
                    Assets Without Coordinates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {noCoordAssets.slice(0, 5).map((asset) => (
                      <div
                        key={asset._id}
                        className="flex items-center justify-between rounded-xl border border-border/40 bg-surface-2 p-3"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {asset.assetId}
                          </p>
                          <p className="text-[11px] text-muted-foreground capitalize">
                            {INFRA_TYPE_INFO[asset.infraType as InfraType]
                              ?.icon ?? ""}
                            {" "}
                            {INFRA_TYPE_INFO[asset.infraType as InfraType]
                              ?.label ?? asset.infraType}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            // Create a temporary MapAssetData to enable editing
                            const tempData: MapAssetData = {
                              assetDocId: asset._id,
                              assetId: asset.assetId,
                              infraType: asset.infraType as InfraType,
                              location: asset.location ?? "",
                              latitude: 0,
                              longitude: 0,
                              status: asset.status,
                              riskCategory: "LOW",
                              priority: "P4",
                              riskScore: 0,
                            };
                            setSelected(tempData);
                            setEditLat("");
                            setEditLng("");
                            setEditingCoords(true);
                            setDetailOpen(true);
                          }}
                          className="gap-1.5 h-8 text-xs"
                        >
                          <Crosshair className="size-3" />
                          Set Location
                        </Button>
                      </div>
                    ))}
                    {noCoordAssets.length > 5 && (
                      <p className="text-[11px] text-muted-foreground text-center py-1">
                        + {noCoordAssets.length - 5} more assets
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
