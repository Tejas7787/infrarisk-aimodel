import { useState, useRef, useCallback, useEffect } from "react";
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
  Zap,
  Shield,
  ImageIcon,
  Plug,
  ExternalLink,
  Loader2,
} from "lucide-react";
import {
  getDefectLabel,
  getSeverityColor,
  getRiskColor,
  getPriorityColor,
} from "@/lib/risk-engine";
import {
  analyzeInfrastructure,
  type AnalysisResult,
} from "@/lib/ai-service";
import { getModelStatus } from "@/lib/yolo-inference";
import type { InfraType } from "@/lib/types";

export default function Inspect() {
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

  // Model status
  const [modelStatus, setModelStatus] = useState<{
    available: boolean;
    message: string;
    details: string[];
  } | null>(null);

  useEffect(() => {
    getModelStatus().then(setModelStatus);
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setSelectedFile(file);
      setResult(null);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    },
    []
  );

  const handleAnalyze = async () => {
    if (!infraType || !selectedFile) return;

    setIsAnalyzing(true);
    setResult(null);

    try {
      // Convert file to data URL for inference
      const imageData = await fileToDataUrl(selectedFile);

      const analysisResult = await analyzeInfrastructure(
        infraType as InfraType,
        imageData,
        0
      );

      setResult(analysisResult);
    } catch (err) {
      // Should not reach here, but handle gracefully
      setResult({
        success: false,
        defects: [],
        risk: {
          riskScore: 0,
          riskCategory: "LOW",
          priority: "P4",
          explanation: "",
          factors: [],
          recommendedAction: "",
          disclaimer: "",
        },
        processingTimeMs: 0,
        modelVersion: "n/a",
        modelNote: err instanceof Error ? err.message : "Unknown error",
        modelConnected: false,
        inferenceDetails: [
          `Analysis error: ${err instanceof Error ? err.message : "Unknown error"}`,
        ],
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleClear = () => {
    setInfraType("");
    setAssetId("");
    setLocation("");
    setNotes("");
    setPreviewUrl(null);
    setSelectedFile(null);
    setResult(null);
    setFactorsExpanded(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const hasImage = !!selectedFile;
  const canAnalyze = !!infraType && hasImage;

  return (
    <AppShell>
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <ScanSearch className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Analysis Pipeline
              </p>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                AI Inspection
              </h1>
            </div>
          </div>
        </header>

        <div className="grid gap-5 md:gap-6 xl:grid-cols-[420px_1fr]">
          {/* Left: Config & Upload */}
          <div className="space-y-4 md:space-y-5">
            {/* Model Status Card */}
            {modelStatus && (
              <div
                className={`rounded-xl border p-4 ${
                  modelStatus.available
                    ? "border-risk-low/30 bg-risk-low/5"
                    : "border-amber-500/20 bg-amber-500/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex size-8 items-center justify-center rounded-lg shrink-0 mt-0.5 ${
                      modelStatus.available
                        ? "bg-risk-low/10"
                        : "bg-amber-500/10"
                    }`}
                  >
                    {modelStatus.available ? (
                      <CheckCircle2 className="size-4 text-risk-low" />
                    ) : (
                      <Plug className="size-4 text-amber-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-semibold ${
                        modelStatus.available
                          ? "text-risk-low"
                          : "text-amber-300"
                      }`}
                    >
                      {modelStatus.message}
                    </p>
                    <div className="mt-2 space-y-0.5">
                      {modelStatus.details.map((line, i) =>
                        line ? (
                          <p
                            key={i}
                            className="text-[11px] text-muted-foreground leading-relaxed"
                          >
                            {line}
                          </p>
                        ) : (
                          <div key={i} className="h-1.5" />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!modelStatus && (
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <div className="flex items-center gap-3">
                  <Loader2 className="size-4 text-muted-foreground animate-spin" />
                  <p className="text-sm text-muted-foreground">
                    Checking model status...
                  </p>
                </div>
              </div>
            )}

            {/* Configuration Card */}
            <Card className="bg-card border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-foreground">
                  Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Infrastructure Type
                  </Label>
                  <Select
                    value={infraType}
                    onValueChange={(v) => setInfraType(v as InfraType)}
                  >
                    <SelectTrigger className="bg-surface-2 border-border/60">
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

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Asset ID
                    </Label>
                    <Input
                      placeholder="e.g., RD-001"
                      value={assetId}
                      onChange={(e) => setAssetId(e.target.value)}
                      className="bg-surface-2 border-border/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Location
                    </Label>
                    <Input
                      placeholder="e.g., Highway 101, MM 42"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-surface-2 border-border/60"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Notes (optional)
                  </Label>
                  <Textarea
                    placeholder="Additional observations..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    className="bg-surface-2 border-border/60 resize-none"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Image Upload */}
            <Card className="bg-card border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-foreground">
                  Image
                </CardTitle>
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
                  <div className="relative group">
                    <img
                      src={previewUrl}
                      alt="Infrastructure preview"
                      className="w-full rounded-xl border border-border/60 object-cover max-h-72"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                          setPreviewUrl(null);
                          setSelectedFile(null);
                          setResult(null);
                          if (fileInputRef.current)
                            fileInputRef.current.value = "";
                        }}
                        className="bg-surface-2/90 border-border/60"
                      >
                        Remove Image
                      </Button>
                    </div>
                    {selectedFile && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-surface-2/90 text-foreground text-[10px] border-border/60">
                          {selectedFile.name}
                        </Badge>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-border/60 bg-surface-2/50 p-8 md:p-10 text-center hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-200"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 mb-3">
                      <Upload className="size-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      Upload infrastructure image
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      JPG, PNG, or WebP — Max 10MB
                    </p>
                  </button>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleAnalyze}
                disabled={!canAnalyze || isAnalyzing}
                className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.72_0.15_220_/_0.2)] hover:shadow-[0_0_24px_oklch(0.72_0.15_220_/_0.3)] transition-all duration-200"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Running inference...
                  </>
                ) : (
                  <>
                    <Zap className="size-4" />
                    Analyze with AI
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={handleClear}
                className="border-border/60 bg-surface-2 hover:bg-surface-3"
              >
                Clear
              </Button>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-4 md:space-y-5">
            {/* Empty state */}
            {!result && !isAnalyzing && (
              <Card className="bg-card border-border/60">
                <CardContent className="py-16 md:py-24 text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-surface-3">
                    <ImageIcon className="size-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    No analysis results
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    {modelStatus?.available
                      ? 'Select infrastructure type, upload an image, and click "Analyze with AI" to run the real inference pipeline.'
                      : "Upload an image and select infrastructure type. The real AI model must be connected before analysis can run."}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Analyzing state */}
            {isAnalyzing && (
              <Card className="bg-card border-border/60">
                <CardContent className="py-16 text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Loader2 className="size-6 text-primary animate-spin" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Running inference...
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Loading model, preprocessing image, running YOLOv8 detection
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Results */}
            {result && (
              <>
                {/* Model not connected banner */}
                {!result.modelConnected && (
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-amber-500/10 shrink-0 mt-0.5">
                        <Plug className="size-4 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-amber-300">
                          Real AI model not connected yet
                        </p>
                        <p className="text-xs text-amber-200/70 mt-1 leading-relaxed">
                          {result.modelNote}
                        </p>
                        {result.inferenceDetails &&
                          result.inferenceDetails.length > 0 && (
                            <div className="mt-3 rounded-lg bg-amber-500/5 border border-amber-500/10 p-3">
                              {result.inferenceDetails.map((line, i) =>
                                line ? (
                                  <p
                                    key={i}
                                    className="text-[11px] text-amber-200/60 font-mono leading-relaxed"
                                  >
                                    {line}
                                  </p>
                                ) : (
                                  <div key={i} className="h-1.5" />
                                )
                              )}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Analysis Status */}
                <Card className="bg-card border-border/60">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {result.success ? (
                          <div className="flex size-8 items-center justify-center rounded-lg bg-risk-low/10">
                            <CheckCircle2 className="size-4 text-risk-low" />
                          </div>
                        ) : (
                          <div className="flex size-8 items-center justify-center rounded-lg bg-risk-critical/10">
                            <XCircle className="size-4 text-risk-critical" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {result.success
                              ? "Analysis Complete"
                              : "Analysis Failed"}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {result.modelConnected
                              ? `${result.defects.length} defect(s) detected by YOLOv8`
                              : "No real inference performed — model not connected"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="size-3" />
                        {result.processingTimeMs}ms
                      </div>
                    </div>

                    {/* Inference details */}
                    {result.inferenceDetails &&
                      result.inferenceDetails.length > 0 &&
                      result.modelConnected && (
                        <div className="mt-3 pt-3 border-t border-border/40">
                          <p className="text-[11px] font-semibold text-muted-foreground mb-1.5">
                            Inference Details
                          </p>
                          {result.inferenceDetails.map((line, i) =>
                            line ? (
                              <p
                                key={i}
                                className="text-[11px] text-muted-foreground font-mono"
                              >
                                {line}
                              </p>
                            ) : (
                              <div key={i} className="h-1" />
                            )
                          )}
                        </div>
                      )}
                  </CardContent>
                </Card>

                {/* Defects */}
                <Card className="bg-card border-border/60">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold text-foreground">
                      Detected Defects
                      <span className="ml-2 text-muted-foreground font-normal">
                        ({result.defects.length})
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {result.defects.length === 0 ? (
                      <div className="py-8 text-center">
                        <p className="text-sm text-muted-foreground">
                          {result.modelConnected
                            ? "No visible defects detected in this image"
                            : "Connect the real model to see detections"}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {result.defects.map((defect, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-border/50 bg-surface-2 p-4"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <p className="font-semibold text-sm text-foreground">
                                  {getDefectLabel(
                                    defect.defectType,
                                    infraType as InfraType
                                  )}
                                </p>
                                <p className="text-[11px] text-muted-foreground mt-0.5">
                                  Confidence:{" "}
                                  {(defect.confidence * 100).toFixed(1)}%
                                </p>
                              </div>
                              <Badge
                                variant="outline"
                                className={`text-[10px] font-semibold border-0 shrink-0 ${getSeverityColor(
                                  defect.severity
                                )}`}
                              >
                                {defect.severity.toUpperCase()}
                              </Badge>
                            </div>
                            {defect.bboxX !== undefined && (
                              <div className="mt-2.5 pt-2.5 border-t border-border/30">
                                <p className="text-[11px] text-muted-foreground font-mono">
                                  BBox: ({defect.bboxX}, {defect.bboxY}) → (
                                  {defect.bboxX! + defect.bboxWidth!},{" "}
                                  {defect.bboxY! + defect.bboxHeight!})
                                </p>
                                <p className="text-[11px] text-muted-foreground/60 font-mono mt-0.5">
                                  Size: {defect.bboxWidth}×
                                  {defect.bboxHeight}px
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Risk Assessment (only shown when real defects exist) */}
                {result.modelConnected && result.defects.length > 0 && (
                  <>
                    <Card className="bg-card border-border/60">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <Shield className="size-4 text-primary" />
                          Risk Assessment
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-5">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="col-span-1 rounded-xl bg-surface-2 p-4 text-center border border-border/30">
                            <p className="text-4xl font-bold tracking-tight text-foreground">
                              {result.risk.riskScore}
                            </p>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                              Risk Score
                            </p>
                          </div>
                          <div className="rounded-xl bg-surface-2 p-4 text-center border border-border/30 flex flex-col items-center justify-center">
                            <Badge
                              variant="outline"
                              className={`text-sm font-bold border-0 ${getRiskColor(
                                result.risk.riskCategory
                              )}`}
                            >
                              {result.risk.riskCategory}
                            </Badge>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                              Category
                            </p>
                          </div>
                          <div className="rounded-xl bg-surface-2 p-4 text-center border border-border/30 flex flex-col items-center justify-center">
                            <Badge
                              variant="outline"
                              className={`text-sm font-bold border-0 ${getPriorityColor(
                                result.risk.priority
                              )}`}
                            >
                              {result.risk.priority}
                            </Badge>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                              Priority
                            </p>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-muted-foreground mb-1.5">
                            <span>0</span>
                            <span className="font-medium">Risk Score</span>
                            <span>100</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-surface-3 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-700 ${
                                result.risk.riskScore >= 80
                                  ? "bg-risk-critical"
                                  : result.risk.riskScore >= 55
                                  ? "bg-risk-high"
                                  : result.risk.riskScore >= 30
                                  ? "bg-risk-moderate"
                                  : "bg-risk-low"
                              }`}
                              style={{
                                width: `${result.risk.riskScore}%`,
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* AI Explanation */}
                    <Card className="bg-card border-border/60">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <FileText className="size-4 text-primary" />
                          AI Explanation
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {result.risk.explanation}
                        </p>

                        <div className="rounded-xl bg-primary/5 border border-primary/15 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                            Recommended Action
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            {result.risk.recommendedAction}
                          </p>
                        </div>

                        {result.risk.factors.length > 0 && (
                          <div>
                            <button
                              onClick={() =>
                                setFactorsExpanded(!factorsExpanded)
                              }
                              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
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
                                    className="rounded-xl border border-border/50 bg-surface-2 p-3.5"
                                  >
                                    <div className="flex items-center justify-between">
                                      <p className="text-sm font-medium text-foreground">
                                        {factor.name}
                                      </p>
                                      <span className="text-[11px] font-semibold text-primary">
                                        +{factor.impact} pts
                                      </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                      {factor.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="size-3.5 mt-0.5 text-amber-400 shrink-0" />
                            <p className="text-xs text-amber-200/80 leading-relaxed">
                              {result.risk.disclaimer}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                <p className="text-[11px] text-muted-foreground/60 italic">
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
