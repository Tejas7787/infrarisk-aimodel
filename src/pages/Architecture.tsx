import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  Cpu,
  ScanSearch,
  BarChart3,
  ListOrdered,
  FileText,
  Brain,
  Database,
  ArrowDown,
  ShieldCheck,
} from "lucide-react";

const PIPELINE_STEPS = [
  { icon: Database, label: "DATA", sublabel: "Images, Sensor Data", color: "oklch(0.72 0.15 220)" },
  { icon: Camera, label: "COMPUTER VISION", sublabel: "YOLO / Object Detection", color: "oklch(0.65 0.15 240)" },
  { icon: ScanSearch, label: "DEFECT DETECTION", sublabel: "Classification + Bounding Boxes", color: "oklch(0.62 0.16 260)" },
  { icon: BarChart3, label: "SEVERITY", sublabel: "Severity Estimation", color: "oklch(0.58 0.16 280)" },
  { icon: Brain, label: "RISK ENGINE", sublabel: "Explainable Risk Scoring", color: "oklch(0.72 0.16 85)" },
  { icon: ListOrdered, label: "PRIORITY", sublabel: "Maintenance Priority Queue", color: "oklch(0.70 0.18 55)" },
  { icon: FileText, label: "AI EXPLANATION", sublabel: "Transparent Decision Rationale", color: "oklch(0.65 0.18 30)" },
  { icon: ShieldCheck, label: "MAINTENANCE DECISION", sublabel: "Actionable Recommendations", color: "oklch(0.72 0.18 155)" },
];

export default function Architecture() {
  return (
    <AppShell>
      <div className="p-4 md:p-8 max-w-[1200px] mx-auto pb-24 md:pb-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <Cpu className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                System Design
              </p>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Architecture
              </h1>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            InfraRisk AI does not only detect infrastructure defects. It converts visual/sensor
            evidence into an explainable inspection-priority decision.
          </p>
        </header>

        {/* Core Pipeline */}
        <Card className="bg-card border-border/60 mb-6 md:mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-foreground">
              AI Inspection Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-0">
              {PIPELINE_STEPS.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center w-full max-w-lg">
                  <div className="flex items-center gap-4 w-full">
                    <div
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
                      style={{ background: step.color, boxShadow: `0 0 20px ${step.color}40` }}
                    >
                      <step.icon className="size-5" />
                    </div>
                    <div className="flex-1 rounded-xl border border-border/40 bg-surface-2 p-3.5">
                      <p className="font-bold text-sm text-foreground">{step.label}</p>
                      <p className="text-[11px] text-muted-foreground">{step.sublabel}</p>
                    </div>
                  </div>
                  {i < PIPELINE_STEPS.length - 1 && (
                    <div className="flex flex-col items-center py-1.5">
                      <div className="w-px h-3 bg-border/40" />
                      <ArrowDown className="size-3.5 text-muted-foreground/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Innovation */}
        <Card className="bg-primary border-0 mb-6 md:mb-8">
          <CardContent className="p-6 md:p-8 text-center">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10 mx-auto mb-4">
              <Brain className="size-6 text-primary-foreground" />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-primary-foreground">
              Core Innovation
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              InfraRisk AI does not only detect infrastructure defects. It converts visual/sensor
              evidence into an <strong className="text-primary-foreground">explainable inspection-priority
              decision</strong>. Every risk score comes with transparent factors, limitations, and
              recommended actions — making AI a trusted decision-support tool for infrastructure
              maintenance teams.
            </p>
          </CardContent>
        </Card>

        {/* System Architecture Grid */}
        <div className="grid gap-4 md:gap-5 md:grid-cols-2 mb-6 md:mb-8">
          <Card className="bg-card border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="size-2 rounded-full bg-chart-1" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["React + TypeScript", "Tailwind CSS + shadcn/ui", "React Router (SPA)", "Recharts (charts)", "Responsive (mobile + desktop)"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1 rounded-full bg-chart-1/50 shrink-0" />
                    {item}
                  </div>
                )
              )}
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="size-2 rounded-full bg-risk-low" />
                Backend & Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Convex (serverless functions)", "Real-time subscriptions", "File storage (images)", "Convex Auth (users)"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1 rounded-full bg-risk-low/50 shrink-0" />
                    {item}
                  </div>
                )
              )}
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="size-2 rounded-full bg-violet-400" />
                AI / ML Layer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Modular model adapter interface", "RoadDetectionModel (RDD2022)", "BridgeDetectionModel (GYU-DET)", "YOLO-based object detection", "REST API between frontend and CV"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1 rounded-full bg-violet-400/50 shrink-0" />
                    {item}
                  </div>
                )
              )}
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="size-2 rounded-full bg-risk-moderate" />
                Risk Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Transparent scoring algorithm", "Multi-factor risk assessment", "Explainable AI (XAI) output", "Priority classification (P1–P4)"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1 rounded-full bg-risk-moderate/50 shrink-0" />
                    {item}
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </div>

        {/* Data Flow */}
        <Card className="bg-card border-border/60">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-foreground">
              Data Flow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-0 text-center">
              {[
                { label: "Frontend", sub: "React UI" },
                { label: "Backend", sub: "Convex" },
                { label: "AI Service", sub: "Adapters" },
                { label: "CV Model", sub: "Detection" },
                { label: "Risk Engine", sub: "Scoring" },
                { label: "Database", sub: "Convex DB" },
                { label: "Dashboard", sub: "Real-time" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex-1 rounded-lg border border-border/40 bg-surface-2 p-2.5 text-center">
                    <p className="text-[11px] font-bold text-foreground">{step.label}</p>
                    <p className="text-[10px] text-muted-foreground">{step.sub}</p>
                  </div>
                  {i < 6 && (
                    <div className="text-muted-foreground/30 text-sm leading-none px-1 hidden md:block">
                      →
                    </div>
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
