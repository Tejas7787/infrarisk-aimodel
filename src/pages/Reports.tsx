import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  AlertTriangle,
  MapPin,
  Shield,
} from "lucide-react";
import {
  DEMO_INSPECTIONS,
  INFRA_TYPE_INFO,
  type InfraType,
  type RiskCategory,
  type Priority,
  type SeverityLevel,
} from "@/lib/types";
import {
  getDefectLabel,
  getSeverityColor,
  getRiskColor,
  getPriorityColor,
} from "@/lib/risk-engine";

interface ReportData {
  inspectionId: string;
  assetId: string;
  infraType: InfraType;
  location: string;
  createdAt: number;
  detections: {
    defectType: string;
    confidence: number;
    severity: SeverityLevel;
  }[];
  riskScore: number;
  riskCategory: RiskCategory;
  priority: Priority;
}

const reports: ReportData[] = DEMO_INSPECTIONS;

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState<ReportData | null>(null);

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
          <Badge variant="outline" className="text-[11px] bg-amber-500/10 text-amber-400 border-amber-500/20">
            DEMO DATA
          </Badge>
        </header>

        <div className="grid gap-4 md:gap-5 xl:grid-cols-[1fr_1fr]">
          {/* Report List */}
          <div className="space-y-2">
            {reports.map((report) => (
              <button
                key={report.inspectionId}
                onClick={() => setSelectedReport(report)}
                className={`w-full text-left rounded-xl border p-4 transition-all duration-150 ${
                  selectedReport?.inspectionId === report.inspectionId
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_0_1px_oklch(0.72_0.15_220_/_0.15)]"
                    : "border-border/40 bg-card hover:bg-surface-2/50 hover:border-border/60"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-sm text-foreground">
                      {report.assetId}
                    </p>
                    <p className="text-[11px] text-muted-foreground capitalize mt-0.5">
                      {INFRA_TYPE_INFO[report.infraType]?.icon}{" "}
                      {INFRA_TYPE_INFO[report.infraType]?.label}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-muted-foreground">
                      <MapPin className="size-3" />
                      {report.location}
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-bold border-0 ${getPriorityColor(
                        report.priority
                      )}`}
                    >
                      {report.priority}
                    </Badge>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {new Date(report.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </button>
            ))}
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
                        {selectedReport.inspectionId} ·{" "}
                        {new Date(selectedReport.createdAt).toLocaleDateString()}
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
                        <p className="font-semibold text-foreground">{selectedReport.assetId}</p>
                      </div>
                      <div className="rounded-lg bg-surface-2 p-3 border border-border/30">
                        <p className="text-[11px] text-muted-foreground">Type</p>
                        <p className="font-semibold text-foreground capitalize">{selectedReport.infraType}</p>
                      </div>
                      <div className="col-span-2 rounded-lg bg-surface-2 p-3 border border-border/30">
                        <p className="text-[11px] text-muted-foreground">Location</p>
                        <p className="font-semibold text-foreground">{selectedReport.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Risk Summary */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Risk Summary
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl bg-surface-2 p-4 text-center border border-border/30">
                        <p className="text-3xl font-bold text-foreground">{selectedReport.riskScore}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                          Risk Score
                        </p>
                      </div>
                      <div className="rounded-xl bg-surface-2 p-4 text-center border border-border/30 flex flex-col items-center justify-center">
                        <Badge variant="outline" className={`text-sm font-bold border-0 ${getRiskColor(selectedReport.riskCategory)}`}>
                          {selectedReport.riskCategory}
                        </Badge>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                          Category
                        </p>
                      </div>
                      <div className="rounded-xl bg-surface-2 p-4 text-center border border-border/30 flex flex-col items-center justify-center">
                        <Badge variant="outline" className={`text-sm font-bold border-0 ${getPriorityColor(selectedReport.priority)}`}>
                          {selectedReport.priority}
                        </Badge>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                          Priority
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Detected Defects */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Detected Defects
                    </h3>
                    <div className="space-y-2">
                      {selectedReport.detections.map((d, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-xl border border-border/40 bg-surface-2 p-3.5"
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {getDefectLabel(d.defectType, selectedReport.infraType)}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              Confidence: {(d.confidence * 100).toFixed(0)}%
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-semibold border-0 ${getSeverityColor(
                              d.severity
                            )}`}
                          >
                            {d.severity}
                          </Badge>
                        </div>
                      ))}
                    </div>
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
      </div>
    </AppShell>
  );
}
