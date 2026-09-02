import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  X,
} from "lucide-react";
import {
  DEMO_ASSETS,
  DEMO_INSPECTIONS,
  INFRA_TYPE_INFO,
  type InfraType,
  type RiskCategory,
  type Priority,
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

const RISK_MARKER_COLORS: Record<string, { fill: string; glow: string }> = {
  LOW: { fill: "#22c55e", glow: "rgba(34,197,94,0.4)" },
  MODERATE: { fill: "#f59e0b", glow: "rgba(245,158,11,0.4)" },
  HIGH: { fill: "#f97316", glow: "rgba(249,115,22,0.4)" },
  CRITICAL: { fill: "#ef4444", glow: "rgba(239,68,68,0.5)" },
};

export default function MapPage() {
  const [selected, setSelected] = useState<MapAsset | null>(null);

  const minLat = Math.min(...mapAssets.map((a) => a.latitude));
  const maxLat = Math.max(...mapAssets.map((a) => a.latitude));
  const minLng = Math.min(...mapAssets.map((a) => a.longitude));
  const maxLng = Math.max(...mapAssets.map((a) => a.longitude));
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
          <Badge variant="outline" className="text-[11px] bg-amber-500/10 text-amber-400 border-amber-500/20">
            DEMO DATA
          </Badge>
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
                {mapAssets.map((asset) => {
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
                      {selected.location}
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

                {/* Recent Inspections */}
                {selected.inspections.length > 0 && (
                  <Card className="bg-card border-border/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold text-foreground">
                        Recent Inspections
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selected.inspections.slice(0, 3).map((insp) => (
                          <div
                            key={insp.inspectionId}
                            className="rounded-xl border border-border/40 bg-surface-2 p-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] text-muted-foreground">
                                {new Date(insp.createdAt).toLocaleDateString()}
                              </span>
                              <Badge
                                variant="outline"
                                className={`text-[10px] border-0 ${getPriorityColor(
                                  insp.priority
                                )}`}
                              >
                                {insp.priority}
                              </Badge>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {insp.detections.map((d, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] bg-surface-3 text-muted-foreground rounded-md px-2 py-0.5"
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
