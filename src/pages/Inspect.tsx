import { useState, useRef, useCallback } from "react";
import { useAuth } from "@/hooks/use-auth";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  ScanSearch,
  AlertTriangle,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Play,
} from "lucide-react";
import {
  calculateRisk,
  getDefectLabel,
  getSeverityColor,
  getRiskColor,
  getPriorityColor,
  type RiskResult,
  type DetectionInput,
} from "@/lib/risk-engine";
import type {
  InfraType,
  SeverityLevel,
  RiskCategory,
  Priority,
} from "@/lib/types";

interface DetectedDefect {
  defectType: string;
  confidence: number;
  severity: SeverityLevel;
  bboxX?: number;
  bboxY?: number;
  bboxWidth?: number;
  bboxHeight?: number;
}

interface AnalysisResult {
  success: boolean;
  defects: DetectedDefect[];
  risk: RiskResult;
  processingTimeMs: number;
  modelNote: string;
}

// Demo data for each infrastructure type
const DEMO_RESULTS: Record<string, AnalysisResult> = {
  road: {
    success: true,
    defects: [
      {
        defectType: "alligator_crack",
        confidence: 0.87,
        severity: "high",
        bboxX: 120,
        bboxY: 200,
        bboxWidth: 350,
        bboxHeight: 180,
      },
      {
        defectType: "pothole",
        confidence: 0.92,
        severity: "critical",
        bboxX: 400,
        bboxY: 310,
        bboxWidth: 150,
        bboxHeight: 120,
      },
    ],
    risk: calculateRisk(
      [
        { defectType: "alligator_crack", confidence: 0.87, severity: "high" },
        { defectType: "pothole", confidence: 0.92, severity: "critical" },
      ],
      "road",
      0
    ),
    processingTimeMs: 1247,
    modelNote:
      "Demo analysis — these are sample detections, not real AI predictions.",
  },
  bridge: {
    success: true,
    defects: [
      {
        defectType: "crack",
        confidence: 0.91,
        severity: "high",
        bboxX: 200,
        bboxY: 100,
        bboxWidth: 400,
        bboxHeight: 60,
      },
      {
        defectType: "spalling",
        confidence: 0.78,
        severity: "medium",
        bboxX: 100,
        bboxY: 350,
        bboxWidth: 200,
        bboxHeight: 150,
      },
      {
        defectType: "corrosion",
        confidence: 0.65,
        severity: "medium",
        bboxX: 500,
        bboxY: 250,
        bboxWidth: 120,
        bboxHeight: 100,
      },
    ],
    risk: calculateRisk(
      [
        { defectType: "crack", confidence: 0.91, severity: "high" },
        { defectType: "spalling", confidence: 0.78, severity: "medium" },
        { defectType: "corrosion", confidence: 0.65, severity: "medium" },
      ],
      "bridge",
      0
    ),
    processingTimeMs: 1532,
    modelNote:
      "Demo analysis — these are sample detections, not real AI predictions.",
  },
  tunnel: {
    success: true,
    defects: [
      {
        defectType: "crack",
        confidence: 0.72,
        severity: "medium",
        bboxX: 150,
        bboxY: 80,
        bboxWidth: 300,
        bboxHeight: 40,
      },
    ],
    risk: calculateRisk(
      [{ defectType: "crack", confidence: 0.72, severity: "medium" }],
      "tunnel",
      0
    ),
    processingTimeMs: 980,
    modelNote:
      "Demo analysis — tunnel module is planned for future development.",
  },
  water: {
    success: true,
    defects: [
      {
        defectType: "corrosion",
        confidence: 0.84,
        severity: "high",
      },
    ],
    risk: calculateRisk(
      [{ defectType: "corrosion", confidence: 0.84, severity: "high" }],
      "water",
      0
    ),
    processingTimeMs: 1100,
    modelNote:
      "Demo analysis — water infrastructure module is planned for future development.",
  },
  power: {
    success: true,
    defects: [
      {
        defectType: "corrosion",
        confidence: 0.69,
        severity: "medium",
      },
    ],
    risk: calculateRisk(
      [{ defectType: "corrosion", confidence: 0.69, severity: "medium" }],
      "power",
      0
    ),
    processingTimeMs: 1050,
    modelNote:
      "Demo analysis — power infrastructure module is planned for future development.",
  },
};

export default function Inspect() {
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [infraType, setInfraType] = useState<InfraType | "">("");
  const [assetId, setAssetId] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [factorsExpanded, setFactorsExpanded] = useState(false);
  const [isDemo, setIsDemo] = useState(false);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setSelectedFile(file);
      setResult(null);
      setIsDemo(false);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    },
    []
  );

  const handleAnalyze = async () => {
    if (!infraType) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 1000));

    // Use demo data
    const demoResult = { ...DEMO_RESULTS[infraType] || DEMO_RESULTS.road };
    demoResult.risk = calculateRisk(
      demoResult.defects.map((d) => ({
        defectType: d.defectType,
        confidence: d.confidence,
        severity: d.severity,
      })),
      infraType as InfraType,
      0
    );

    setResult(demoResult);
    setIsDemo(true);
    setIsAnalyzing(false);
  };

  const handleClear = () => {
    setInfraType("");
    setAssetId("");
    setLocation("");
    setNotes("");
    setPreviewUrl(null);
    setSelectedFile(null);
    setResult(null);
    setIsDemo(false);
    setFactorsExpanded(false);
  };

  return (
    <AppShell>
      <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
        <header className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">Analysis</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            AI Inspection
          </h1>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          {/* Left: Upload & Config */}
          <div className="space-y-6">
            {/* Demo Banner */}
            <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900/50 dark:bg-amber-950/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Play className="size-4 mt-0.5 text-amber-600 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                      Demo Mode Available
                    </p>
                    <p className="text-xs text-amber-700/80 dark:text-amber-300/60 mt-1">
                      Click "Analyze with AI" without uploading an image to see sample results.
                      Demo data is clearly labeled and not a real-time AI prediction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form */}
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-base">Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Infrastructure Type *</Label>
                  <Select
                    value={infraType}
                    onValueChange={(v) => setInfraType(v as InfraType)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select infrastructure type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="road">🛣️ Road</SelectItem>
                      <SelectItem value="bridge">🌉 Bridge</SelectItem>
                      <SelectItem value="tunnel">🚇 Tunnel</SelectItem>
                      <SelectItem value="water">💧 Water Infrastructure</SelectItem>
                      <SelectItem value="power">⚡ Power Infrastructure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Asset ID</Label>
                    <Input
                      placeholder="e.g., RD-001"
                      value={assetId}
                      onChange={(e) => setAssetId(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Input
                      placeholder="e.g., Highway 101, MM 42"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Notes (optional)</Label>
                  <Textarea
                    placeholder="Additional observations..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Image Upload */}
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-base">Image</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {previewUrl ? (
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Infrastructure preview"
                      className="w-full rounded-lg border border-border object-cover max-h-80"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                          setPreviewUrl(null);
                          setSelectedFile(null);
                          setResult(null);
                          setIsDemo(false);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                    {isDemo && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-amber-500 text-white">DEMO DATA</Badge>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-10 text-center hover:bg-muted/50 transition-colors"
                  >
                    <Upload className="size-8 text-muted-foreground mb-3" />
                    <p className="text-sm font-medium">Click to upload infrastructure image</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      JPG, PNG, or WebP — Max 10MB
                    </p>
                  </button>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                onClick={handleAnalyze}
                disabled={!infraType || isAnalyzing}
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {isAnalyzing ? (
                  <>
                    <div className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <ScanSearch className="size-4" />
                    Analyze with AI
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-6">
            {!result && !isAnalyzing && (
              <Card className="border-border/70">
                <CardContent className="py-16 text-center">
                  <ScanSearch className="size-10 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold">No analysis results</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    Select an infrastructure type and upload an image, then click "Analyze with AI"
                    to see defect detection and risk assessment results.
                  </p>
                </CardContent>
              </Card>
            )}

            {isAnalyzing && (
              <Card className="border-border/70">
                <CardContent className="py-16 text-center">
                  <div className="size-10 border-3 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto mb-4 dark:border-slate-100" />
                  <h3 className="font-semibold">Analyzing image...</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Running computer vision model and risk assessment pipeline
                  </p>
                </CardContent>
              </Card>
            )}

            {result && (
              <>
                {/* Demo Warning */}
                {isDemo && (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="size-4 mt-0.5 text-amber-600 shrink-0" />
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        <strong>DEMO DATA</strong> — These are sample results for demonstration purposes,
                        not real-time AI predictions.
                      </p>
                    </div>
                  </div>
                )}

                {/* Analysis Status */}
                <Card className="border-border/70">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {result.success ? (
                          <CheckCircle2 className="size-5 text-emerald-500" />
                        ) : (
                          <XCircle className="size-5 text-red-500" />
                        )}
                        <span className="text-sm font-medium">
                          {result.success ? "Analysis Complete" : "Analysis Failed"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="size-3" />
                        {result.processingTimeMs}ms
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Defects */}
                <Card className="border-border/70">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">
                      Detected Defects ({result.defects.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {result.defects.length === 0 ? (
                      <p className="text-sm text-muted-foreground py-4 text-center">
                        No visible defects detected
                      </p>
                    ) : (
                      <div className="space-y-3">
                        {result.defects.map((defect, i) => (
                          <div
                            key={i}
                            className="rounded-lg border border-border p-4"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-semibold text-sm">
                                  {getDefectLabel(defect.defectType, infraType as InfraType)}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  Confidence: {(defect.confidence * 100).toFixed(0)}%
                                </p>
                              </div>
                              <Badge
                                variant="outline"
                                className={`text-xs ${getSeverityColor(defect.severity)}`}
                              >
                                {defect.severity.toUpperCase()}
                              </Badge>
                            </div>
                            {defect.bboxX !== undefined && (
                              <div className="mt-2 text-xs text-muted-foreground">
                                Bounding box: ({defect.bboxX}, {defect.bboxY}) → ({defect.bboxX! + defect.bboxWidth!}, {defect.bboxY! + defect.bboxHeight!})
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Risk Assessment */}
                <Card className="border-border/70">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <p className="text-3xl font-bold">{result.risk.riskScore}</p>
                        <p className="text-xs text-muted-foreground mt-1">Risk Score</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <Badge
                          variant="outline"
                          className={`text-sm ${getRiskColor(result.risk.riskCategory)}`}
                        >
                          {result.risk.riskCategory}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-2">Category</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <Badge
                          variant="outline"
                          className={`text-sm ${getPriorityColor(result.risk.priority)}`}
                        >
                          {result.risk.priority}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-2">Priority</p>
                      </div>
                    </div>

                    {/* Risk Score Bar */}
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>0</span>
                        <span>Risk Score</span>
                        <span>100</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            result.risk.riskScore >= 80
                              ? "bg-red-500"
                              : result.risk.riskScore >= 55
                              ? "bg-orange-500"
                              : result.risk.riskScore >= 30
                              ? "bg-amber-500"
                              : "bg-emerald-500"
                          }`}
                          style={{ width: `${result.risk.riskScore}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Explanation */}
                <Card className="border-border/70">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <FileText className="size-4" />
                      AI Explanation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {result.risk.explanation}
                    </p>

                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-sm font-medium">Recommended Action</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {result.risk.recommendedAction}
                      </p>
                    </div>

                    {/* Why This Risk? */}
                    {result.risk.factors.length > 0 && (
                      <div>
                        <button
                          onClick={() => setFactorsExpanded(!factorsExpanded)}
                          className="flex items-center gap-2 text-sm font-medium hover:text-foreground text-muted-foreground transition-colors"
                        >
                          Why this risk?
                          {factorsExpanded ? (
                            <ChevronUp className="size-4" />
                          ) : (
                            <ChevronDown className="size-4" />
                          )}
                        </button>
                        {factorsExpanded && (
                          <div className="mt-3 space-y-2">
                            {result.risk.factors.map((factor, i) => (
                              <div
                                key={i}
                                className="rounded-lg border border-border p-3"
                              >
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium">{factor.name}</p>
                                  <span className="text-xs text-muted-foreground">
                                    +{factor.impact} pts
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {factor.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Disclaimer */}
                    <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3 dark:border-amber-900/50 dark:bg-amber-950/20">
                      <p className="text-xs text-amber-800 dark:text-amber-200">
                        {result.risk.disclaimer}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Model Note */}
                <p className="text-xs text-muted-foreground italic">
                  {result.modelNote}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
