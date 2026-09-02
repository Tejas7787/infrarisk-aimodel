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
  CheckCircle2,
  Layers,
  Database,
  Cpu,
  Eye,
  Workflow,
  FileWarning,
  HardHat,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
              <AlertTriangle className="size-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">InfraRisk AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
            <a href="#solution" className="hover:text-foreground transition-colors">Solution</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#capabilities" className="hover:text-foreground transition-colors">AI Capabilities</a>
            <a href="#responsible" className="hover:text-foreground transition-colors">Responsible AI</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-transparent dark:from-slate-950/50 dark:to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            AI-Powered Infrastructure Intelligence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            AI-Powered Infrastructure
            <br />
            <span className="text-muted-foreground">Risk Intelligence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Detect visible defects, assess risk, and prioritize inspections before small problems become major failures.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inspect">
              <Button size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 px-8">
                <ScanSearch className="size-4" />
                Analyze Infrastructure
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="gap-2 px-8">
                <LayoutDashboard className="size-4" />
                View Dashboard
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            AI-assisted visual assessment — not a substitute for professional engineering inspection.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Problem</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Aging infrastructure is failing silently
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Thousands of roads, bridges, tunnels, and water systems degrade every day.
              Manual inspection can't keep up. By the time human inspectors reach a defect,
              it may have already become a safety hazard — or an expensive repair.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "42%", label: "of U.S. roads are in poor or mediocre condition", source: "ASCE 2025" },
              { stat: "46,000+", label: "bridges rated structurally deficient nationwide", source: "FHWA" },
              { stat: "$2.6T", label: "needed to bring infrastructure to good condition", source: "ASCE" },
            ].map((item) => (
              <Card key={item.label} className="border-border/70">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold tracking-tight">{item.stat}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground/60">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section id="solution" className="py-20 px-6 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Our Solution</p>
            <h2 className="text-3xl font-bold tracking-tight">
              From visual evidence to prioritized action
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              InfraRisk AI does not only detect infrastructure defects. It converts visual evidence into
              an explainable inspection-priority decision. Upload an image, and our AI pipeline detects
              defects, estimates severity, calculates risk, assigns maintenance priority, and clearly
              explains every decision.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Camera, title: "Image Analysis", desc: "Upload road or bridge images for AI-powered defect detection" },
              { icon: Brain, title: "Risk Scoring", desc: "Transparent, explainable risk scores with contributing factors" },
              { icon: BarChart3, title: "Priority Queue", desc: "Automatically rank assets by maintenance urgency" },
              { icon: MapPin, title: "Risk Mapping", desc: "Interactive map of infrastructure assets by risk category" },
            ].map((item) => (
              <Card key={item.title} className="border-border/70">
                <CardContent className="p-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-slate-900/5 dark:bg-slate-100/10">
                    <item.icon className="size-5 text-slate-900 dark:text-slate-100" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">How It Works</p>
          <h2 className="text-3xl font-bold tracking-tight">End-to-end inspection pipeline</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", icon: Camera, title: "Upload", desc: "Select infrastructure type and upload an image" },
              { step: "02", icon: ScanSearch, title: "Detect", desc: "AI model identifies visible defects with bounding boxes" },
              { step: "03", icon: BarChart3, title: "Assess", desc: "Risk engine calculates severity, risk score, and priority" },
              { step: "04", icon: FileWarning, title: "Decide", desc: "Get explainable recommendations for maintenance action" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-muted-100 dark:text-muted/40 mb-4">
                  {item.step}
                </div>
                <item.icon className="size-5 text-slate-900 dark:text-slate-100 mb-3" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section id="capabilities" className="py-20 px-6 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">AI Capabilities</p>
          <h2 className="text-3xl font-bold tracking-tight">Modular computer vision pipeline</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="border-border/70">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="text-xl">🛣️</span> Road Module
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Detects longitudinal cracks, transverse cracks, alligator cracking, and potholes.
                  Designed for the RDD2022 dataset with YOLO-based object detection.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Longitudinal Crack", "Transverse Crack", "Alligator Crack", "Pothole"].map((d) => (
                    <span key={d} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium">{d}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="text-xl">🌉</span> Bridge Module
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Identifies cracks, spalling, exposed reinforcement, seepage, and corrosion.
                  Designed for the GYU-DET dataset with separate model adapter.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Crack", "Spalling", "Exposed Rebar", "Seepage", "Corrosion"].map((d) => (
                    <span key={d} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium">{d}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6 border-border/70">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Unified Risk Engine</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Every detection feeds into a transparent risk engine that considers defect type, severity,
                confidence, infrastructure type, defect count, and inspection history. Every risk score
                comes with a full explanation of contributing factors.
              </p>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {[
                  { level: "P1", label: "Critical", color: "bg-red-500" },
                  { level: "P2", label: "High", color: "bg-orange-500" },
                  { level: "P3", label: "Moderate", color: "bg-amber-500" },
                  { level: "P4", label: "Low", color: "bg-emerald-500" },
                ].map((p) => (
                  <div key={p.level} className="rounded-lg border border-border p-3 text-center">
                    <div className={`mx-auto mb-1 size-2 rounded-full ${p.color}`} />
                    <p className="text-sm font-semibold">{p.level}</p>
                    <p className="text-xs text-muted-foreground">{p.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Supported Infrastructure */}
      <section className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Supported Infrastructure</p>
          <h2 className="text-3xl font-bold tracking-tight">Five infrastructure categories</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: "🛣️", name: "Roads", status: "MVP", active: true },
              { icon: "🌉", name: "Bridges", status: "MVP", active: true },
              { icon: "🚇", name: "Tunnels", status: "Planned", active: false },
              { icon: "💧", name: "Water", status: "Planned", active: false },
              { icon: "⚡", name: "Power", status: "Planned", active: false },
            ].map((item) => (
              <Card key={item.name} className={`border-border/70 ${item.active ? "" : "opacity-60"}`}>
                <CardContent className="p-5 text-center">
                  <p className="text-3xl mb-3">{item.icon}</p>
                  <p className="font-semibold">{item.name}</p>
                  <p className={`mt-1 text-xs font-medium ${item.active ? "text-emerald-600" : "text-muted-foreground"}`}>
                    {item.status}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section id="responsible" className="py-20 px-6 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Responsible AI</p>
            <h2 className="text-3xl font-bold tracking-tight">Transparent, limited, human-supervised</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              InfraRisk AI is designed as a decision-support tool, not a replacement for professional
              engineering judgment. Every result is clearly labeled with its limitations.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Eye, title: "Model Limitations", desc: "AI detection is based on training data scope. Novel defect types may not be recognized." },
              { icon: Database, title: "Dataset Scope", desc: "Models trained on specific regional datasets. Geographic generalization is not guaranteed." },
              { icon: Camera, title: "Image Quality", desc: "Results depend on image resolution, lighting, and angle. Poor images yield uncertain results." },
              { icon: AlertTriangle, title: "False Positives/Negatives", desc: "No detection system is perfect. All results require human verification." },
              { icon: HardHat, title: "Human Required", desc: "AI results are recommended for professional inspection — never a standalone safety certification." },
              { icon: Layers, title: "Decision Support", desc: "Risk scores help prioritize maintenance. They do not certify structural safety." },
            ].map((item) => (
              <Card key={item.title} className="border-border/70">
                <CardContent className="p-5">
                  <item.icon className="size-5 text-muted-foreground mb-3" />
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Technology</p>
          <h2 className="text-3xl font-bold tracking-tight">Built with modern, scalable tools</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Cpu, name: "React + TypeScript", desc: "Frontend UI framework" },
              { icon: Database, name: "Convex", desc: "Backend database & API" },
              { icon: Brain, name: "YOLO / Custom CV", desc: "Computer vision models" },
              { icon: Workflow, name: "Modular AI Layer", desc: "Pluggable model adapters" },
            ].map((item) => (
              <div key={item.name} className="flex items-start gap-3 rounded-xl border border-border p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <item.icon className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to prioritize your infrastructure?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Upload an image and let AI-assisted analysis guide your inspection decisions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inspect">
              <Button size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 px-8">
                Start Inspection
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="gap-2 px-8">
                <LayoutDashboard className="size-4" />
                Open Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
              <AlertTriangle className="size-3.5" />
            </div>
            <span className="text-sm font-bold">InfraRisk AI</span>
          </div>
          <p className="text-xs text-muted-foreground">
            AI-assisted infrastructure risk intelligence. Not a substitute for professional engineering inspection.
          </p>
        </div>
      </footer>
    </div>
  );
}
