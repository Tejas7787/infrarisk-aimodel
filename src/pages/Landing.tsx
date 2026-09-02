import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScanSearch,
  LayoutDashboard,
  ShieldCheck,
  Brain,
  Camera,
  BarChart3,
  MapPin,
  AlertTriangle,
  ArrowRight,
  Layers,
  Database,
  Cpu,
  Eye,
  Workflow,
  FileWarning,
  HardHat,
  Zap,
  Shield,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <AlertTriangle className="size-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              InfraRisk<span className="text-primary ml-0.5">AI</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
            <a href="#solution" className="hover:text-foreground transition-colors">Solution</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</a>
            <a href="#responsible" className="hover:text-foreground transition-colors">Responsible AI</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Sign in
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_16px_oklch(0.72_0.15_220_/_0.2)]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        {/* Subtle gradient orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            AI-Powered Infrastructure Intelligence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            AI-Powered Infrastructure
            <br />
            <span className="text-primary">Risk Intelligence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Detect visible defects, assess risk, and prioritize inspections before small
            problems become major failures.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inspect">
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-[0_0_24px_oklch(0.72_0.15_220_/_0.25)] hover:shadow-[0_0_32px_oklch(0.72_0.15_220_/_0.35)] transition-all duration-200"
              >
                <ScanSearch className="size-4" />
                Analyze Infrastructure
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="gap-2 px-8 border-border/60 bg-surface-2 hover:bg-surface-3">
                <LayoutDashboard className="size-4" />
                View Dashboard
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-xs text-muted-foreground/60">
            AI-assisted visual assessment — not a substitute for professional engineering inspection.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-20 md:py-24 px-6 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
              The Problem
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Aging infrastructure is failing silently
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Thousands of roads, bridges, tunnels, and water systems degrade every day.
              Manual inspection can't keep up. By the time human inspectors reach a defect,
              it may have already become a safety hazard — or an expensive repair.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { stat: "42%", label: "of U.S. roads are in poor or mediocre condition", source: "ASCE 2025" },
              { stat: "46,000+", label: "bridges rated structurally deficient nationwide", source: "FHWA" },
              { stat: "$2.6T", label: "needed to bring infrastructure to good condition", source: "ASCE" },
            ].map((item) => (
              <Card key={item.label} className="bg-card border-border/60">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold tracking-tight text-foreground">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[11px] text-muted-foreground/50">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section id="solution" className="py-20 md:py-24 px-6 border-t border-border/40 bg-surface-1/50">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
              Our Solution
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              From visual evidence to prioritized action
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              InfraRisk AI does not only detect infrastructure defects. It converts visual
              evidence into an explainable inspection-priority decision. Upload an image,
              and our AI pipeline detects defects, estimates severity, calculates risk,
              assigns maintenance priority, and clearly explains every decision.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Camera, title: "Image Analysis", desc: "Upload road or bridge images for AI-powered defect detection" },
              { icon: Brain, title: "Risk Scoring", desc: "Transparent, explainable risk scores with contributing factors" },
              { icon: BarChart3, title: "Priority Queue", desc: "Automatically rank assets by maintenance urgency" },
              { icon: MapPin, title: "Risk Mapping", desc: "Interactive map of infrastructure assets by risk category" },
            ].map((item) => (
              <Card key={item.title} className="bg-card border-border/60 hover:border-border transition-colors">
                <CardContent className="p-5">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-24 px-6 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            End-to-end inspection pipeline
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", icon: Camera, title: "Upload", desc: "Select infrastructure type and upload an image" },
              { step: "02", icon: ScanSearch, title: "Detect", desc: "AI model identifies visible defects with bounding boxes" },
              { step: "03", icon: BarChart3, title: "Assess", desc: "Risk engine calculates severity, risk score, and priority" },
              { step: "04", icon: FileWarning, title: "Decide", desc: "Get explainable recommendations for maintenance action" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-surface-4 mb-4 select-none">
                  {item.step}
                </div>
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 mb-3">
                  <item.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section id="capabilities" className="py-20 md:py-24 px-6 border-t border-border/40 bg-surface-1/50">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
            AI Capabilities
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Modular computer vision pipeline
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Card className="bg-card border-border/60">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  <span className="text-xl">🛣️</span> Road Module
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Detects longitudinal cracks, transverse cracks, alligator cracking,
                  and potholes. Designed for the RDD2022 dataset with YOLO-based
                  object detection.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Longitudinal Crack", "Transverse Crack", "Alligator Crack", "Pothole"].map(
                    (d) => (
                      <span
                        key={d}
                        className="rounded-md bg-surface-3 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {d}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border/60">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  <span className="text-xl">🌉</span> Bridge Module
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Identifies cracks, spalling, exposed reinforcement, seepage, and
                  corrosion. Designed for the GYU-DET dataset with separate model
                  adapter.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Crack", "Spalling", "Exposed Rebar", "Seepage", "Corrosion"].map(
                    (d) => (
                      <span
                        key={d}
                        className="rounded-md bg-surface-3 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {d}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-4 bg-card border-border/60">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-foreground">Unified Risk Engine</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Every detection feeds into a transparent risk engine that considers
                defect type, severity, confidence, infrastructure type, defect count,
                and inspection history. Every risk score comes with a full explanation
                of contributing factors.
              </p>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { level: "P1", label: "Critical", bg: "bg-risk-critical/15", text: "text-risk-critical", dot: "bg-risk-critical" },
                  { level: "P2", label: "High", bg: "bg-risk-high/15", text: "text-risk-high", dot: "bg-risk-high" },
                  { level: "P3", label: "Moderate", bg: "bg-risk-moderate/15", text: "text-risk-moderate", dot: "bg-risk-moderate" },
                  { level: "P4", label: "Low", bg: "bg-risk-low/15", text: "text-risk-low", dot: "bg-risk-low" },
                ].map((p) => (
                  <div
                    key={p.level}
                    className={`rounded-xl ${p.bg} p-4 text-center`}
                  >
                    <div className={`mx-auto mb-1.5 size-2 rounded-full ${p.dot}`} />
                    <p className={`text-lg font-bold ${p.text}`}>{p.level}</p>
                    <p className="text-xs text-muted-foreground">{p.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Supported Infrastructure */}
      <section className="py-20 md:py-24 px-6 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
            Supported Infrastructure
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Five infrastructure categories
          </h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: "🛣️", name: "Roads", status: "MVP", active: true },
              { icon: "🌉", name: "Bridges", status: "MVP", active: true },
              { icon: "🚇", name: "Tunnels", status: "Planned", active: false },
              { icon: "💧", name: "Water", status: "Planned", active: false },
              { icon: "⚡", name: "Power", status: "Planned", active: false },
            ].map((item) => (
              <Card
                key={item.name}
                className={`bg-card border-border/60 ${
                  item.active ? "" : "opacity-50"
                }`}
              >
                <CardContent className="p-5 text-center">
                  <p className="text-3xl mb-3">{item.icon}</p>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p
                    className={`mt-1 text-[11px] font-semibold uppercase tracking-wider ${
                      item.active ? "text-risk-low" : "text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section
        id="responsible"
        className="py-20 md:py-24 px-6 border-t border-border/40 bg-surface-1/50"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
              Responsible AI
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Transparent, limited, human-supervised
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              InfraRisk AI is designed as a decision-support tool, not a replacement
              for professional engineering judgment. Every result is clearly labeled
              with its limitations.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Eye, title: "Model Limitations", desc: "AI detection is based on training data scope. Novel defect types may not be recognized." },
              { icon: Database, title: "Dataset Scope", desc: "Models trained on specific regional datasets. Geographic generalization is not guaranteed." },
              { icon: Camera, title: "Image Quality", desc: "Results depend on image resolution, lighting, and angle. Poor images yield uncertain results." },
              { icon: AlertTriangle, title: "False Positives/Negatives", desc: "No detection system is perfect. All results require human verification." },
              { icon: HardHat, title: "Human Required", desc: "AI results are recommended for professional inspection — never a standalone safety certification." },
              { icon: Layers, title: "Decision Support", desc: "Risk scores help prioritize maintenance. They do not certify structural safety." },
            ].map((item) => (
              <Card key={item.title} className="bg-card border-border/60">
                <CardContent className="p-5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-surface-3 mb-3">
                    <item.icon className="size-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 md:py-24 px-6 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
            Technology
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Built with modern, scalable tools
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Cpu, name: "React + TypeScript", desc: "Frontend UI framework" },
              { icon: Database, name: "Convex", desc: "Backend database & API" },
              { icon: Brain, name: "YOLO / Custom CV", desc: "Computer vision models" },
              { icon: Workflow, name: "Modular AI Layer", desc: "Pluggable model adapters" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-3 rounded-xl border border-border/40 bg-card p-4"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 border-t border-border/40">
        <div className="mx-auto max-w-3xl text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
          <h2 className="relative text-3xl font-bold tracking-tight text-foreground">
            Ready to prioritize your infrastructure?
          </h2>
          <p className="relative mt-4 text-muted-foreground leading-relaxed">
            Upload an image and let AI-assisted analysis guide your inspection decisions.
          </p>
          <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inspect">
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-[0_0_24px_oklch(0.72_0.15_220_/_0.25)] hover:shadow-[0_0_32px_oklch(0.72_0.15_220_/_0.35)] transition-all duration-200"
              >
                Start Inspection
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 border-border/60 bg-surface-2 hover:bg-surface-3"
              >
                <LayoutDashboard className="size-4" />
                Open Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <AlertTriangle className="size-3.5" />
            </div>
            <span className="text-sm font-bold text-foreground">
              InfraRisk<span className="text-primary ml-0.5">AI</span>
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground/60">
            AI-assisted infrastructure risk intelligence. Not a substitute for professional engineering inspection.
          </p>
        </div>
      </footer>
    </div>
  );
}
