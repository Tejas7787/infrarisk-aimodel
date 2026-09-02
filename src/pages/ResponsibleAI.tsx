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
} from "lucide-react";

const SECTIONS = [
  {
    icon: Eye,
    title: "Model Limitations",
    items: [
      "AI detection models are trained on specific datasets with known defect categories. Novel defect types or unusual deterioration patterns may not be recognized.",
      "Model performance varies with image quality, lighting conditions, viewing angle, and resolution.",
      "Object detection models have inherent uncertainty. Confidence scores reflect model certainty, not ground truth.",
      "Models may produce both false positives (incorrectly detecting defects) and false negatives (missing real defects).",
    ],
  },
  {
    icon: Database,
    title: "Dataset Limitations",
    items: [
      "Road detection models target the RDD2022 dataset, which has specific geographic and climatic characteristics.",
      "Bridge detection models target the GYU-DET dataset, with its own scope of defect types and bridge conditions.",
      "Training datasets may not represent the full diversity of infrastructure conditions worldwide.",
      "Class imbalance in training data can affect detection rates for less common defect types.",
    ],
  },
  {
    icon: Camera,
    title: "Image Quality Limitations",
    items: [
      "Low-resolution images reduce detection accuracy and may cause the model to miss small defects.",
      "Poor lighting, shadows, and glare can obscure defects or create false patterns.",
      "Oblique viewing angles can distort defect dimensions and affect severity estimation.",
      "Recommended: images should be at least 1024×768 pixels with adequate lighting.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "False Positives & Negatives",
    items: [
      "No computer vision system achieves perfect accuracy. False positives waste inspector time; false negatives miss real risks.",
      "The system is designed to err on the side of caution (lower threshold for flagging potential issues).",
      "All AI detections should be verified by qualified infrastructure professionals.",
      "Regular model evaluation against new data is essential to maintain performance.",
    ],
  },
  {
    icon: Globe,
    title: "Geographic Generalization",
    items: [
      "Models trained on data from specific regions may not generalize well to different climates, materials, or construction practices.",
      "Infrastructure standards, materials, and deterioration patterns vary by country and region.",
      "Users should consider local conditions when interpreting AI results.",
      "Model retraining with local data is recommended for production deployment in new regions.",
    ],
  },
  {
    icon: HardHat,
    title: "Human Inspection Requirement",
    items: [
      "AI-assisted visual assessment is a screening and prioritization tool, not a replacement for professional inspection.",
      "Structural safety cannot be determined from surface-level image analysis alone.",
      "Critical findings should always trigger professional on-site inspection.",
      "The system is designed to help maintenance planners prioritize — not to make autonomous decisions.",
    ],
  },
  {
    icon: Layers,
    title: "Risk Score Interpretation",
    items: [
      "Risk scores are calculated from multiple factors including defect severity, confidence, count, and infrastructure type.",
      "Scores are relative indicators for prioritization, not absolute measures of structural safety.",
      "A low risk score does not guarantee structural integrity; a high score does not confirm structural failure.",
      "Risk scores should be used alongside professional judgment and local regulations.",
    ],
  },
  {
    icon: Scale,
    title: "Ethical Considerations",
    items: [
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
      <div className="p-4 md:p-8 max-w-[1200px] mx-auto pb-24 md:pb-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <ShieldCheck className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Ethics & Transparency
              </p>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Responsible AI
              </h1>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Transparency about limitations is fundamental to responsible AI deployment
            in infrastructure management.
          </p>
        </header>

        {/* Core Principle */}
        <Card className="bg-primary border-0 mb-6 md:mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
                <ShieldCheck className="size-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-bold text-primary-foreground">
                  Core Principle
                </h2>
                <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                  AI results in InfraRisk AI are <strong>decision-support tools</strong>,
                  not engineering certifications. Every analysis result is clearly labeled as
                  "AI-assisted assessment — not a substitute for professional engineering
                  inspection." Risk scores help prioritize maintenance resources. They do not
                  certify structural safety.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sections Grid */}
        <div className="grid gap-4 md:gap-5 md:grid-cols-2">
          {SECTIONS.map((section) => (
            <Card key={section.title} className="bg-card border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-surface-3">
                    <section.icon className="size-4 text-muted-foreground" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Notice */}
        <Card className="border-amber-500/20 bg-amber-500/5 mt-6 md:mt-8">
          <CardContent className="p-5 md:p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="size-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-300 text-sm">
                  Disclaimer
                </h3>
                <p className="mt-2 text-sm text-amber-200/70 leading-relaxed">
                  InfraRisk AI is a demonstration platform. The AI models connected to this
                  platform (when deployed) should be validated against local conditions, datasets,
                  and engineering standards before production use. This platform does not provide
                  certified structural assessments. Always consult qualified infrastructure
                  professionals for safety-critical decisions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
