import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  Eye,
  Database,
  Camera,
  AlertTriangle,
  HardHat,
  Layers,
  Globe,
  Scale,
  BookOpen,
} from "lucide-react";

const SECTIONS = [
  {
    icon: Eye,
    title: "Model Limitations",
    content: [
      "AI detection models are trained on specific datasets with known defect categories. Novel defect types or unusual deterioration patterns may not be recognized.",
      "Model performance varies with image quality, lighting conditions, viewing angle, and resolution.",
      "Object detection models have inherent uncertainty. Confidence scores reflect model certainty, not ground truth.",
      "Models may produce both false positives (incorrectly detecting defects) and false negatives (missing real defects).",
    ],
  },
  {
    icon: Database,
    title: "Dataset Limitations",
    content: [
      "Road detection models target the RDD2022 dataset, which has specific geographic and climatic characteristics.",
      "Bridge detection models target the GYU-DET dataset, with its own scope of defect types and bridge conditions.",
      "Training datasets may not represent the full diversity of infrastructure conditions worldwide.",
      "Class imbalance in training data can affect detection rates for less common defect types.",
    ],
  },
  {
    icon: Camera,
    title: "Image Quality Limitations",
    content: [
      "Low-resolution images reduce detection accuracy and may cause the model to miss small defects.",
      "Poor lighting, shadows, and glare can obscure defects or create false patterns.",
      "Oblique viewing angles can distort defect dimensions and affect severity estimation.",
      "Partial occlusion (e.g., by vehicles, vegetation, or debris) can prevent defect detection.",
      "Recommended: images should be at least 1024×768 pixels with adequate lighting.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "False Positives and Negatives",
    content: [
      "No computer vision system achieves perfect accuracy. False positives waste inspector time; false negatives miss real risks.",
      "The system is designed to err on the side of caution (lower threshold for flagging potential issues).",
      "All AI detections should be verified by qualified infrastructure professionals before maintenance decisions are made.",
      "Regular model evaluation against new data is essential to maintain performance.",
    ],
  },
  {
    icon: Globe,
    title: "Geographic Generalization",
    content: [
      "Models trained on data from specific regions may not generalize well to different climates, materials, or construction practices.",
      "Infrastructure standards, materials, and deterioration patterns vary by country and region.",
      "Users should consider local conditions when interpreting AI results.",
      "Model retraining with local data is recommended for production deployment in new regions.",
    ],
  },
  {
    icon: HardHat,
    title: "Human Inspection Requirement",
    content: [
      "AI-assisted visual assessment is a screening and prioritization tool, not a replacement for professional inspection.",
      "Structural safety cannot be determined from surface-level image analysis alone.",
      "Critical findings should always trigger professional on-site inspection.",
      "The system is designed to help maintenance planners prioritize — not to make autonomous decisions.",
    ],
  },
  {
    icon: Layers,
    title: "Risk Score Interpretation",
    content: [
      "Risk scores are calculated from multiple factors including defect severity, confidence, count, and infrastructure type.",
      "Scores are relative indicators for prioritization, not absolute measures of structural safety.",
      "A low risk score does not guarantee structural integrity; a high score does not confirm structural failure.",
      "Risk scores should be used alongside professional judgment, engineering standards, and local regulations.",
    ],
  },
  {
    icon: Scale,
    title: "Ethical Considerations",
    content: [
      "Infrastructure inspection AI should augment human expertise, not replace it.",
      "Decisions affecting public safety must always involve qualified professionals.",
      "The system should not be used as the sole basis for maintenance or demolition decisions.",
      "Transparency in AI limitations is essential for responsible deployment.",
    ],
  },
];

export default function ResponsibleAI() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8 max-w-[1200px] mx-auto">
        <header className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">Ethics & Transparency</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">Responsible AI</h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            InfraRisk AI is designed as a decision-support tool. Transparency about limitations
            is fundamental to responsible AI deployment in infrastructure management.
          </p>
        </header>

        {/* Key Principle */}
        <Card className="border-border/70 mb-8 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 dark:bg-black/10">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Core Principle</h2>
                <p className="mt-2 text-sm opacity-80 leading-relaxed">
                  AI results in InfraRisk AI are <strong>decision-support tools</strong>, not engineering
                  certifications. Every analysis result is clearly labeled as "AI-assisted assessment —
                  not a substitute for professional engineering inspection." Risk scores help prioritize
                  maintenance resources. They do not certify structural safety.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-6">
          {SECTIONS.map((section) => (
            <Card key={section.title} className="border-border/70">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-muted">
                    <section.icon className="size-4 text-muted-foreground" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Notice */}
        <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900/50 dark:bg-amber-950/20 mt-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="size-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-200">Disclaimer</h3>
                <p className="mt-2 text-sm text-amber-700/80 dark:text-amber-300/60 leading-relaxed">
                  InfraRisk AI is a demonstration platform. The AI models connected to this platform
                  (when deployed) should be validated against local conditions, datasets, and engineering
                  standards before production use. This platform does not provide certified structural
                  assessments. Always consult qualified infrastructure professionals for safety-critical
                  decisions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
