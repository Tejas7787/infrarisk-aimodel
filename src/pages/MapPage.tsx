import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  X,
  AlertTriangle,
  FileText,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import {
  DEMO_ASSETS,
  DEMO_INSPECTIONS,
  INFRA_TYPE_INFO,
  type InfraType,
  type RiskCategory,
  type Priority,
  type SeverityLevel,
} from "@/lib/types";
import { getRiskColor, getPriorityColor, getDefectLabel } from "@/lib/risk-engine";

interface MapAsset {
  assetId: string;
  infraType: InfraType;
  location: string;
  latitude: number;
  longitude: number;
  status: string;
  riskCategory: RiskCategory;
  priority: Priority;
  riskScore: number;
  inspections: typeof DEMO_INSPECTIONS;
}

// Merge assets with inspection data for the map
const mapAssets: MapAsset[] = DEMO_ASSETS.filter(
  (a) => a.latitude && a.longitude
).map((a) => {
  const inspections = DEMO_INSPECTIONS.filter((i) => i.assetId === a.assetId);
  const latestRisk = inspections[0];
  return {
    ...a,
    latitude: a.latitude!,
    longitude: a.longitude!,
    riskCategory: latestRisk?.riskCategory ?? "LOW",
    priority: latestRisk?.priority ?? "P4",
    riskScore: latestRisk?.riskScore ?? 0,
    inspections,
  };
});

const RISK_DOT_COLORS: Record<string, string> = {
  LOW: "bg-emerald-500",
  MODERATE: "bg-amber-500",
  HIGH: "bg-orange-500",
  CRITICAL: "bg-red-500",
};

export default function MapPage() {
  const [selected, setSelected] = useState<MapAsset | null>(null);

  // Simple map projection (normalized to a virtual grid since we don't have a real map library)
  const minLat = Math.min(...mapAssets.map((a) => a.latitude));
  const maxLat = Math.max(...mapAssets.map((a) => a.latitude));
  const minLng = Math.min(...mapAssets.map((a) => a.longitude));
  const maxLng = Math.max(...mapAssets.map((a) => a.longitude));
  const padding = 80;

  const project = (lat: number, lng: number) => {
    const x =
      padding +
      ((lng - minLng) / (maxLng - minLng || 1)) *
        (600 - 2 * padding);
    const y =
      padding +
      ((maxLat - lat) / (maxLat - minLat || 1)) *
        (400 - 2 * padding);
    return { x, y };
  };

  return (
    <AppShell>
      <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Visualization</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">Risk Map</h1>
          </div>
          <Badge variant="outline" className="text-amber-600 border-amber-200">
            DEMO DATA — Coordinates are illustrative
          </Badge>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
          {/* Map Canvas */}
          <Card className="border-border/70">
            <CardContent className="p-4">
              <div className="relative bg-muted/30 rounded-lg border border-border overflow-hidden" style={{ aspectRatio: "3/2" }}>
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={`v${i}`}
                      x1={i * 60}
                      y1={0}
                      x2={i * 60}
                      y2={400}
                      stroke="currentColor"
                      className="text-border/30"
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
                      stroke="currentColor"
                      className="text-border/30"
                      strokeWidth={0.5}
                    />
                  ))}
                </svg>

                {/* Asset markers */}
                {mapAssets.map((asset) => {
                  const { x, y } = project(asset.latitude, asset.longitude);
                  return (
                    <button
                      key={asset.assetId}
                      onClick={() => setSelected(asset)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{ left: `${(x / 600) * 100}%`, top: `${(y / 400) * 100}%` }}
                    >
                      <div
                        className={`size-4 rounded-full ${RISK_DOT_COLORS[asset.riskCategory]} ring-2 ring-white dark:ring-slate-900 shadow-md group-hover:scale-125 transition-transform`}
                      />
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium whitespace-nowrap bg-background/80 backdrop-blur-sm rounded px-1.5 py-0.5 border border-border/50">
                        {asset.assetId}
                      </div>
                    </button>
                  );
                })}

                {/* Legend */}
                <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm rounded-lg border border-border p-2.5">
                  <p className="text-[10px] font-medium mb-1.5 text-muted-foreground">Risk Level</p>
                  <div className="flex flex-col gap-1">
                    {[
                      { label: "Critical", color: "bg-red-500" },
                      { label: "High", color: "bg-orange-500" },
                      { label: "Moderate", color: "bg-amber-500" },
                      { label: "Low", color: "bg-emerald-500" },
                    ].map((l) => (
                      <div key={l.label} className="flex items-center gap-1.5">
                        <span className={`size-2 rounded-full ${l.color}`} />
                        <span className="text-[10px] text-muted-foreground">{l.label}</span>
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
                <Card className="border-border/70">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{selected.assetId}</CardTitle>
                        <p className="text-xs text-muted-foreground capitalize mt-0.5">
                          {INFRA_TYPE_INFO[selected.infraType]?.icon}{" "}
                          {INFRA_TYPE_INFO[selected.infraType]?.label}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelected(null)}
                        className="size-8 p-0"
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {selected.location}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <p className="text-2xl font-bold">{selected.riskScore}</p>
                        <p className="text-xs text-muted-foreground">Risk Score</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <Badge
                          variant="outline"
                          className={`${getPriorityColor(selected.priority)}`}
                        >
                          {selected.priority}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">Priority</p>
                      </div>
                    </div>

                    <Badge
                      variant="outline"
                      className={`w-full justify-center ${getRiskColor(selected.riskCategory)}`}
                    >
                      {selected.riskCategory} RISK
                    </Badge>
                  </CardContent>
                </Card>

                {/* Recent Inspections */}
                {selected.inspections.length > 0 && (
                  <Card className="border-border/70">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Recent Inspections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selected.inspections.slice(0, 3).map((insp) => (
                          <div
                            key={insp.inspectionId}
                            className="rounded-lg border border-border p-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                {new Date(insp.createdAt).toLocaleDateString()}
                              </span>
                              <Badge variant="outline" className={`text-xs ${getPriorityColor(insp.priority)}`}>
                                {insp.priority}
                              </Badge>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {insp.detections.map((d, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] bg-muted rounded px-1.5 py-0.5"
                                >
                                  {getDefectLabel(d.defectType, insp.infraType)}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card className="border-border/70">
                <CardContent className="py-16 text-center">
                  <MapPin className="size-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm font-medium">Select an asset</p>
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
