import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  AlertTriangle,
  MapPin,
} from "lucide-react";
import {
  INFRA_TYPE_INFO,
  type InfraType,
} from "@/lib/types";
import {
  getDefectLabel,
  getSeverityColor,
  getRiskColor,
  getPriorityColor,
} from "@/lib/risk-engine";

export default function Reports() {
  const { user } = useAuth();
  const [selectedInspectionId, setSelectedInspectionId] = useState<string | null>(null);

  const inspections = useQuery(
    api.inspections.listByUser,
    user?._id ? { userId: user._id } : "skip"
  );
  const assets = useQuery(
    api.assets.list,
    user?._id ? { userId: user._id } : "skip"
  );
  const riskAssessments = useQuery(
    api.inspections.listRiskByUser,
    user?._id ? { userId: user._id } : "skip"
  );

  const isLoading =
    inspections === undefined || assets === undefined || riskAssessments === undefined;

  if (isLoading) {
    return (
      <AppShell>
        <div className="p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
          <header className="mb-6 md:mb-8">
            <div className="flex items-center gap-3 mb-1">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  Documentation
                </p>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                  Reports
                </h1>
              </div>
            </div>
          </header>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 rounded-xl bg-surface-2 animate-pulse" />
            ))}
          </div>
        </div>
      </AppShell>
    );
  }

  const assetMap = new Map((assets ?? []).map((a) => [a._id, a]));

  // Build report data by joining inspections with their risk assessments
  const reportData = (inspections ?? [])
    .filter((i) => i.status === "completed")
    .map((inspection) => {
      const asset = assetMap.get(inspection.assetId);
      const risk = (riskAssessments ?? []).find(
        (r) => r.inspectionId === inspection._id
      );
      return {
        inspection,
        asset,
        risk,
      };
    })
    .sort((a, b) => b.inspection.createdAt - a.inspection.createdAt);

  // Get the selected report's detections
  const selectedReport = reportData.find(
    (r) => r.inspection._id === selectedInspectionId
  );

  // Query detections for selected inspection
  const detections = useQuery(
    api.inspections.listDetectionsByInspection,
    selectedInspectionId ? { inspectionId: selectedInspectionId as any } : "skip"
  );

  return (
    <AppShell>
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
        <header className="mb-6 md:mb-8 flex items-start justify-between">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Documentation
              </p>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Reports
              </h1>
            </div>
          </div>
        </header>

        {reportData.length === 0 ? (
          <Card className="bg-card border-border/60">
            <CardContent className="py-20 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-surface-3 mx-auto mb-4">
                <FileText className="size-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                No completed inspections
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Complete an AI inspection on the Inspection page to generate reports.
                Reports are created automatically when inspections finish.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:gap-5 xl:grid-cols-[1fr_1fr]">
            {/* Report List */}
            <div className="space-y-2">
              {reportData.map((report) => {
                const infraType = report.inspection.infraType as InfraType;
                const isSelected = selectedInspectionId === report.inspection._id;
                return (
                  <button
                    key={report.inspection._id}
                    onClick={() => setSelectedInspectionId(report.inspection._id)}
                    className={`w-full text-left rounded-xl border p-4 transition-all duration-150 ${
                      isSelected
                        ? "border-primary/40 bg-primary/5 shadow-[0_0_0_1px_oklch(0.72_0.15_220_/_0.15)]"
                        : "border-border/40 bg-card hover:bg-surface-2/50 hover:border-border/60"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-sm text-foreground">
                          {report.asset?.assetId ?? "Unknown Asset"}
                        </p>
                        <p className="text-[11px] text-muted-foreground capitalize mt-0.5">
                          {INFRA_TYPE_INFO[infraType]?.icon}{" "}
                          {INFRA_TYPE_INFO[infraType]?.label ?? infraType}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1 text-[11px] text-muted-foreground">
                          <MapPin className="size-3" />
                          {report.inspection.location ?? report.asset?.location ?? "No location"}
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        {report.risk ? (
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-bold border-0 ${getPriorityColor(
                              report.risk.priority as "P1" | "P2" | "P3" | "P4"
                            )}`}
                          >
                            {report.risk.priority}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px] border-0 bg-surface-3 text-muted-foreground">
                            No risk data
                          </Badge>
                        )}
                        <p className="text-[11px] text-muted-foreground mt-1">
                          {new Date(report.inspection.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Report Preview */}
            <div>
              {selectedReport ? (
                <Card className="bg-card border-border/60">
                  <CardHeader className="border-b border-border/40 pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base text-foreground">
                          Inspection Report
                        </CardTitle>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {selectedReport.inspection._id} ·{" "}
                          {new Date(selectedReport.inspection.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className="bg-primary/15 text-primary text-[10px] font-bold border-0">
                        AI-ASSISTED
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 p-5 md:p-6">
                    {/* Asset Info */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Asset Information
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-lg bg-surface-2 p-3 border border-border/30">
                          <p className="text-[11px] text-muted-foreground">Asset ID</p>
                          <p className="font-semibold text-foreground">
                            {selectedReport.asset?.assetId ?? "Unknown"}
                          </p>
                        </div>
                        <div className="rounded-lg bg-surface-2 p-3 border border-border/30">
                          <p className="text-[11px] text-muted-foreground">Type</p>
                          <p className="font-semibold text-foreground capitalize">
                            {selectedReport.inspection.infraType}
                          </p>
                        </div>
                        <div className="col-span-2 rounded-lg bg-surface-2 p-3 border border-border/30">
                          <p className="text-[11px] text-muted-foreground">Location</p>
                          <p className="font-semibold text-foreground">
                            {selectedReport.inspection.location ??
                              selectedReport.asset?.location ??
                              "No location specified"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Risk Summary */}
                    {selectedReport.risk ? (
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Risk Summary
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="rounded-xl bg-surface-2 p-4 text-center border border-border/30">
                            <p className="text-3xl font-bold text-foreground">
                              {selectedReport.risk.riskScore}
                            </p>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                              Risk Score
                            </p>
                          </div>
                          <div className="rounded-xl bg-surface-2 p-4 text-center border border-border/30 flex flex-col items-center justify-center">
                            <Badge
                              variant="outline"
                              className={`text-sm font-bold border-0 ${getRiskColor(
                                selectedReport.risk.riskCategory as any
                              )}`}
                            >
                              {selectedReport.risk.riskCategory}
                            </Badge>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                              Category
                            </p>
                          </div>
                          <div className="rounded-xl bg-surface-2 p-4 text-center border border-border/30 flex flex-col items-center justify-center">
                            <Badge
                              variant="outline"
                              className={`text-sm font-bold border-0 ${getPriorityColor(
                                selectedReport.risk.priority as any
                              )}`}
                            >
                              {selectedReport.risk.priority}
                            </Badge>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                              Priority
                            </p>
                          </div>
                        </div>

                        {/* Explanation */}
                        <div className="mt-4 rounded-xl bg-surface-2 p-4 border border-border/30">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                            AI Explanation
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            {selectedReport.risk.explanation}
                          </p>
                        </div>

                        {/* Recommended Action */}
                        <div className="mt-3 rounded-xl bg-primary/5 border border-primary/15 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                            Recommended Action
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            {selectedReport.risk.recommendedAction}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-xl bg-surface-2 p-4 border border-border/30 text-center">
                        <p className="text-sm text-muted-foreground">
                          No risk assessment available for this inspection
                        </p>
                      </div>
                    )}

                    {/* Detected Defects */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Detected Defects
                      </h3>
                      {detections && detections.length > 0 ? (
                        <div className="space-y-2">
                          {detections.map((d) => (
                            <div
                              key={d._id}
                              className="flex items-center justify-between rounded-xl border border-border/40 bg-surface-2 p-3.5"
                            >
                              <div>
                                <p className="text-sm font-medium text-foreground">
                                  {getDefectLabel(
                                    d.defectType,
                                    selectedReport.inspection.infraType as InfraType
                                  )}
                                </p>
                                <p className="text-[11px] text-muted-foreground">
                                  Confidence: {(d.confidence * 100).toFixed(0)}%
                                </p>
                              </div>
                              <Badge
                                variant="outline"
                                className={`text-[10px] font-semibold border-0 ${getSeverityColor(
                                  d.severity as any
                                )}`}
                              >
                                {d.severity}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground py-4 text-center">
                          No detections recorded
                        </p>
                      )}
                    </div>

                    {/* Disclaimer */}
                    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="size-4 mt-0.5 text-amber-400 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-amber-300">
                            Important Disclaimer
                          </p>
                          <p className="text-xs text-amber-200/70 mt-1 leading-relaxed">
                            AI-assisted assessment — not a substitute for professional
                            engineering inspection. Risk scores are decision-support tools
                            and do not certify structural safety. All findings should be
                            verified by a qualified infrastructure professional.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card border-border/60">
                  <CardContent className="py-16 md:py-24 text-center">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-surface-3 mx-auto mb-4">
                      <FileText className="size-6 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      Select a report
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Choose an inspection from the list to preview its report.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
