import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Cpu,
  ScanSearch,
  BarChart3,
  ListOrdered,
  FileText,
  Brain,
  Database,
  Layers,
  ArrowDown,
  Workflow,
  ShieldCheck,
  Eye,
} from "lucide-react";

const PIPELINE_STEPS = [
  { icon: Database, label: "DATA", sublabel: "Images, Sensor Data", color: "bg-slate-700" },
  { icon: Camera, label: "COMPUTER VISION", sublabel: "YOLO / Object Detection", color: "bg-blue-600" },
  { icon: ScanSearch, label: "DEFECT DETECTION", sublabel: "Classification + Bounding Boxes", color: "bg-indigo-600" },
  { icon: BarChart3, label: "SEVERITY", sublabel: "Severity Estimation", color: "bg-violet-600" },
  { icon: Brain, label: "RISK ENGINE", sublabel: "Explainable Risk Scoring", color: "bg-amber-600" },
  { icon: ListOrdered, label: "PRIORITY", sublabel: "Maintenance Priority Queue", color: "bg-orange-600" },
  { icon: FileText, label: "AI EXPLANATION", sublabel: "Transparent Decision Rationale", color: "bg-red-600" },
  { icon: ShieldCheck, label: "MAINTENANCE DECISION", sublabel: "Actionable Recommendations", color: "bg-emerald-600" },
];

export default function Architecture() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8 max-w-[1200px] mx-auto">
        <header className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">System Design</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">Architecture</h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            InfraRisk AI does not only detect infrastructure defects. It converts visual/sensor evidence
            into an explainable inspection-priority decision.
          </p>
        </header>

        {/* Core Pipeline */}
        <Card className="border-border/70 mb-8">
          <CardHeader>
            <CardTitle className="text-base">AI Inspection Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-1">
              {PIPELINE_STEPS.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div className="flex items-center gap-4 w-full max-w-lg">
                    <div
                      className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${step.color} text-white`}
                    >
                      <step.icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{step.label}</p>
                      <p className="text-xs text-muted-foreground">{step.sublabel}</p>
                    </div>
                  </div>
                  {i < PIPELINE_STEPS.length - 1 && (
                    <div className="flex flex-col items-center py-1">
                      <div className="w-0.5 h-4 bg-border" />
                      <ArrowDown className="size-3 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Innovation */}
        <Card className="border-border/70 mb-8 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
          <CardContent className="p-8 text-center">
            <Brain className="size-10 mx-auto mb-4 opacity-70" />
            <h2 className="text-xl font-bold">Core Innovation</h2>
            <p className="mt-3 text-sm opacity-80 max-w-2xl mx-auto leading-relaxed">
              InfraRisk AI does not only detect infrastructure defects. It converts visual/sensor evidence
              into an <strong>explainable inspection-priority decision</strong>. Every risk score comes with
              transparent factors, limitations, and recommended actions — making AI a trusted decision-support
              tool for infrastructure maintenance teams.
            </p>
          </CardContent>
        </Card>

        {/* System Architecture */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="text-sm">Frontend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-blue-500" />
                React + TypeScript
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-blue-500" />
                Tailwind CSS + shadcn/ui
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-blue-500" />
                React Router (SPA navigation)
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-blue-500" />
                Recharts (dashboard visualizations)
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-blue-500" />
                Responsive design (mobile + desktop)
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="text-sm">Backend & Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500" />
                Convex (database + serverless functions)
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500" />
                Real-time data subscriptions
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500" />
                File storage (infrastructure images)
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500" />
                Convex Auth (user management)
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="text-sm">AI / ML Layer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-violet-500" />
                Modular model adapter interface
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-violet-500" />
                RoadDetectionModel (RDD2022)
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-violet-500" />
                BridgeDetectionModel (GYU-DET)
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-violet-500" />
                YOLO-based object detection
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-violet-500" />
                REST API between frontend and CV models
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="text-sm">Risk Engine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-amber-500" />
                Transparent scoring algorithm
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-amber-500" />
                Multi-factor risk assessment
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-amber-500" />
                Explainable AI (XAI) output
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-amber-500" />
                Priority classification (P1–P4)
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Flow */}
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="text-sm">Data Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-7 text-center">
              {[
                { label: "Frontend", sub: "React UI" },
                { label: "Backend API", sub: "Convex Functions" },
                { label: "AI Service", sub: "Model Adapters" },
                { label: "CV Model", sub: "Object Detection" },
                { label: "Risk Engine", sub: "Scoring Logic" },
                { label: "Database", sub: "Convex DB" },
                { label: "Dashboard", sub: "Real-time View" },
              ].map((step, i) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div className="rounded-lg border border-border p-3 w-full">
                    <p className="text-xs font-semibold">{step.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{step.sub}</p>
                  </div>
                  {i < 6 && (
                    <div className="text-muted-foreground text-lg leading-none my-1">→</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
