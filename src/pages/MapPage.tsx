import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  X,
} from "lucide-react";
import {
  INFRA_TYPE_INFO,
  type InfraType,
  type RiskCategory,
  type Priority,
} from "@/lib/types";
import { getRiskColor, getPriorityColor, getDefectLabel } from "@/lib/risk-engine";

const RISK_MARKER_COLORS: Record<string, { fill: string; glow: string }> = {
  LOW: { fill: "#22c55e", glow: "rgba(34,197,94,0.4)" },
  MODERATE: { fill: "#f59e0b", glow: "rgba(245,158,11,0.4)" },
  HIGH: { fill: "#f97316", glow: "rgba(249,115,22,0.4)" },
  CRITICAL: { fill: "#ef4444", glow: "rgba(239,68,68,0.5)" },
};

interface MapAssetData {
  assetId: string;
  infraType: InfraType;
  location: string;
  latitude: number;
  longitude: number;
  status: string;
  riskCategory: RiskCategory;
  priority: Priority;
  riskScore: number;
  assetDocId: string;
}

export default function MapPage() {
  const { user } = useAuth();
  const [selected, setSelected] = useState<MapAssetData | null>(null);

  const assets = useQuery(
    api.assets.list,
    user?._id ? { userId: user._id } : "skip"
  );
  const riskAssessments = useQuery(
    api.inspections.listRiskByUser,
    user?._id ? { userId: user._id } : "skip"
  );

  const isLoading = assets === undefined || riskAssessments === undefined;

  // Build map assets from real data
  const mapAssets: MapAssetData[] = (assets ?? [])
    .filter((a) => a.latitude != null && a.longitude != null)
    .map((asset) => {
      const latestRisk = (riskAssessments ?? [])
        .filter((r) => r.assetId === asset._id)
        .sort((a, b) => b.createdAt - a.createdAt)[0];
      return {
        assetId: asset.assetId,
        infraType: asset.infraType as InfraType,
        location: asset.location ?? "",
        latitude: asset.latitude!,
        longitude: asset.longitude!,
        status: asset.status,
        riskCategory: (latestRisk?.riskCategory as RiskCategory) ?? "LOW",
        priority: (latestRisk?.priority as Priority) ?? "P4",
        riskScore: latestRisk?.riskScore ?? 0,
        assetDocId: asset._id,
      };
    });

  // Only show assets with coordinates
  const geoAssets = mapAssets.filter(
    (a) => a.latitude != null && a.longitude != null
  );

  const hasData = geoAssets.length > 0;

  const minLat = hasData
    ? Math.min(...geoAssets.map((a) => a.latitude))
    : 37.77;
  const maxLat = hasData
    ? Math.max(...geoAssets.map((a) => a.latitude))
    : 37.82;
  const minLng = hasData
    ? Math.min(...geoAssets.map((a) => a.longitude))
    : -122.48;
  const maxLng = hasData
    ? Math.max(...geoAssets.map((a) => a.longitude))
    : -122.37;
  const padding = 80;

  const project = (lat: number, lng: number) => {
    const x =
      padding +
      ((lng - minLng) / (maxLng - minLng || 1)) * (600 - 2 * padding);
    const y =
      padding +
      ((maxLat - lat) / (maxLat - minLat || 1)) * (400 - 2 * padding);
    return { x, y };
  };

  // Find inspections for selected asset
  const selectedInspections = selected
    ? (riskAssessments ?? []).filter((r) => r.assetId === selected.assetDocId)
    : [];

  return (
    <AppShell>
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
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
          {!isLoading && !hasData && (
            <Badge variant="outline" className="text-[11px] bg-primary/10 text-primary border-primary/20">
              NO DATA — Add assets with coordinates on the Inspection page
            </Badge>
          )}
        </header>

        <div className="grid gap-4 md:gap-5 xl:grid-cols-[1fr_360px]">
          {/* Map Canvas */}
          <Card className="bg-card border-border/60">
            <CardContent className="p-3 md:p-4">
              <div
                className="relative rounded-xl border border-border/40 overflow-hidden"
                style={{ aspectRatio: "3/2", background: "oklch(0.12 0.015 260)" }}
              >
                {/* Grid lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 600 400"
                >
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={`v${i}`}
                      x1={i * 60}
                      y1={0}
                      x2={i * 60}
                      y2={400}
                      stroke="oklch(0.22 0.012 260)"
                      strokeWidth={0.5}
                    />
                  ))}
                  {[...Array(7)].map((_, i) => (
                    <line
                      key={`h${i}`}
                      x1={0}
                      y1={i * 60}
                      x2={600}
                      y2={400}
                      stroke="oklch(0.22 0.012 260)"
                      strokeWidth={0.5}
                    />
                  ))}
                </svg>

                {/* Asset markers */}
                {geoAssets.map((asset) => {
                  const { x, y } = project(asset.latitude, asset.longitude);
                  const colors =
                    RISK_MARKER_COLORS[asset.riskCategory] ??
                    RISK_MARKER_COLORS.LOW;
                  return (
                    <button
                      key={asset.assetId}
                      onClick={() => setSelected(asset)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                      style={{
                        left: `${(x / 600) * 100}%`,
                        top: `${(y / 400) * 100}%`,
                      }}
                    >
                      {/* Glow */}
                      <div
                        className="absolute inset-0 -m-3 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"
                        style={{ background: colors.glow }}
                      />
                      {/* Dot */}
                      <div
                        className="relative size-3.5 rounded-full ring-2 ring-[oklch(0.12_0.015_260)] shadow-lg group-hover:scale-125 transition-transform"
                        style={{ background: colors.fill }}
                      />
                      {/* Label */}
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-foreground/70 whitespace-nowrap bg-[oklch(0.17_0.012_260)]/90 backdrop-blur-sm rounded-md px-2 py-0.5 border border-border/40">
                        {asset.assetId}
                      </div>
                    </button>
                  );
                })}

                {/* Empty state on map */}
                {!isLoading && !hasData && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-surface-3/50 mx-auto mb-3">
                        <MapPin className="size-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        No assets with coordinates
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">
                        Add latitude/longitude to assets to see them on the map
                      </p>
                    </div>
                  </div>
                )}

                {/* Legend */}
                <div className="absolute bottom-3 left-3 bg-[oklch(0.17_0.012_260)]/95 backdrop-blur-sm rounded-xl border border-border/40 p-3">
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
                          className="size-2 rounded-full shrink-0"
                          style={{ background: l.color }}
                        />
                        <span className="text-[11px] text-muted-foreground">
                          {l.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detail Panel */}
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
                        onClick={() => setSelected(null)}
                        className="size-8 p-0 text-muted-foreground hover:text-foreground"
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {selected.location || "No location specified"}
                    </div>

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
                  </CardContent>
                </Card>

                {/* Risk Assessments for this asset */}
                {selectedInspections.length > 0 && (
                  <Card className="bg-card border-border/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold text-foreground">
                        Risk Assessments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedInspections.slice(0, 3).map((risk) => (
                          <div
                            key={risk._id}
                            className="rounded-xl border border-border/40 bg-surface-2 p-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] text-muted-foreground">
                                {new Date(risk.createdAt).toLocaleDateString()}
                              </span>
                              <Badge
                                variant="outline"
                                className={`text-[10px] border-0 ${getPriorityColor(
                                  risk.priority as "P1" | "P2" | "P3" | "P4"
                                )}`}
                              >
                                {risk.priority}
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {risk.explanation}
                              </p>
                            </div>
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
          </div>
        </div>
      </div>
    </AppShell>
  );
}
