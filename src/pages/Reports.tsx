import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  AlertTriangle,
  MapPin,
  Calendar,
  Shield,
  Eye,
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
  calculateRisk,
} from "@/lib/risk-engine";

interface ReportData {
  inspectionId: string;
  assetId: string;
  infraType: InfraType;
  location: string;
  createdAt: number;
  detections: { defectType: string; confidence: number; severity: SeverityLevel }[];
  riskScore: number;
  riskCategory: RiskCategory;
  priority: Priority;
}

const reports: ReportData[] = DEMO_INSPECTIONS;

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState<ReportData | null>(null);

  return (
    <AppShell>
      <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Documentation</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">Reports</h1>
          </div>
          <Badge variant="outline" className="text-amber-600 border-amber-200">
            DEMO DATA
          </Badge>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          {/* Report List */}
          <div className="space-y-3">
            {reports.map((report) => (
              <button
                key={report.inspectionId}
                onClick={() => setSelectedReport(report)}
                className={`w-full text-left rounded-xl border p-4 transition-colors ${
                  selectedReport?.inspectionId === report.inspectionId
                    ? "border-slate-900 dark:border-slate-100 bg-muted/50"
                    : "border-border hover:bg-muted/30"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-sm">{report.assetId}</p>
                    <p className="text-xs text-muted-foreground capitalize mt-0.5">
                      {INFRA_TYPE_INFO[report.infraType]?.icon}{" "}
                      {INFRA_TYPE_INFO[report.infraType]?.label}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {report.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getPriorityColor(report.priority)}`}
                    >
                      {report.priority}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
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
              <Card className="border-border/70" id="report-preview">
                <CardHeader className="border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">Inspection Report</CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {selectedReport.inspectionId} · {new Date(selectedReport.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className="bg-amber-500 text-white text-xs">
                      AI-ASSISTED
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  {/* Asset Info */}
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Asset Information</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground">Asset ID</p>
                        <p className="font-medium">{selectedReport.assetId}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Type</p>
                        <p className="font-medium capitalize">{selectedReport.infraType}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-medium">{selectedReport.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Risk Summary */}
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Risk Summary</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <p className="text-2xl font-bold">{selectedReport.riskScore}</p>
                        <p className="text-xs text-muted-foreground">Risk Score</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <Badge
                          variant="outline"
                          className={`${getRiskColor(selectedReport.riskCategory)}`}
                        >
                          {selectedReport.riskCategory}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">Category</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <Badge
                          variant="outline"
                          className={`${getPriorityColor(selectedReport.priority)}`}
                        >
                          {selectedReport.priority}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">Priority</p>
                      </div>
                    </div>
                  </div>

                  {/* Detected Defects */}
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Detected Defects</h3>
                    <div className="space-y-2">
                      {selectedReport.detections.map((d, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg border border-border p-3"
                        >
                          <div>
                            <p className="text-sm font-medium">
                              {getDefectLabel(d.defectType, selectedReport.infraType)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Confidence: {(d.confidence * 100).toFixed(0)}%
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${getSeverityColor(d.severity)}`}
                          >
                            {d.severity}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="size-4 mt-0.5 text-amber-600 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                          Important Disclaimer
                        </p>
                        <p className="text-xs text-amber-700/80 dark:text-amber-300/60 mt-1 leading-relaxed">
                          AI-assisted assessment — not a substitute for professional engineering inspection.
                          Risk scores are decision-support tools and do not certify structural safety.
                          All findings should be verified by a qualified infrastructure professional.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border/70">
                <CardContent className="py-16 text-center">
                  <FileText className="size-10 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold">Select a report</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    Choose an inspection from the list to generate and preview its report.
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
