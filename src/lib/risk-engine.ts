// Risk Engine for InfraRisk AI
// Calculates explainable risk scores from detected defects

import type {
  InfraType,
  RiskCategory,
  Priority,
  SeverityLevel,
} from "./types";

export interface DetectionInput {
  defectType: string;
  confidence: number;
  severity: SeverityLevel;
}

export interface RiskFactor {
  name: string;
  impact: number;
  description: string;
}

export interface RiskResult {
  riskScore: number;
  riskCategory: RiskCategory;
  priority: Priority;
  explanation: string;
  factors: RiskFactor[];
  recommendedAction: string;
  disclaimer: string;
}

const SEVERITY_MAP: Record<SeverityLevel, number> = {
  low: 15,
  medium: 40,
  high: 70,
  critical: 95,
};

const INFRA_TYPE_WEIGHTS: Record<InfraType, number> = {
  road: 1.0,
  bridge: 1.2,
  tunnel: 1.15,
  water: 1.1,
  power: 1.15,
};

function clamp(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, val));
}

export function calculateRisk(
  detections: DetectionInput[],
  infraType: InfraType,
  previousInspections: number = 0
): RiskResult {
  if (detections.length === 0) {
    return {
      riskScore: 0,
      riskCategory: "LOW",
      priority: "P4",
      explanation:
        "No defects were detected in this analysis. Continue routine monitoring.",
      factors: [],
      recommendedAction: "No action required. Schedule routine re-inspection.",
      disclaimer:
        "AI-assisted visual assessment — not a substitute for professional engineering inspection.",
    };
  }

  const factors: RiskFactor[] = [];
  let totalScore = 0;

  // Factor 1: Maximum severity detected
  const maxSeverityDefect = detections.reduce((max, d) =>
    SEVERITY_MAP[d.severity] > SEVERITY_MAP[max.severity] ? d : max
  );
  const severityImpact = SEVERITY_MAP[maxSeverityDefect.severity];
  totalScore += severityImpact * 0.4;
  factors.push({
    name: "Maximum Severity",
    impact: severityImpact,
    description: `Highest severity defect: ${maxSeverityDefect.defectType} (${maxSeverityDefect.severity}). Severity contributes ${Math.round(severityImpact * 0.4)} points.`,
  });

  // Factor 2: Number of defects
  const defectCountImpact = Math.min(detections.length * 12, 40);
  totalScore += defectCountImpact;
  factors.push({
    name: "Defect Count",
    impact: defectCountImpact,
    description: `${detections.length} defect(s) detected. Multiple defects compound risk. Contributes ${defectCountImpact} points.`,
  });

  // Factor 3: Average confidence
  const avgConfidence =
    detections.reduce((sum, d) => sum + d.confidence, 0) / detections.length;
  const confidenceImpact = Math.round(avgConfidence * 20);
  totalScore += confidenceImpact;
  factors.push({
    name: "Model Confidence",
    impact: confidenceImpact,
    description: `Average detection confidence: ${(avgConfidence * 100).toFixed(0)}%. Higher confidence increases certainty of risk.`,
  });

  // Factor 4: Infrastructure type
  const typeMultiplier = INFRA_TYPE_WEIGHTS[infraType] ?? 1.0;
  if (typeMultiplier > 1.0) {
    const typeImpact = Math.round((typeMultiplier - 1.0) * 20);
    totalScore += typeImpact;
    factors.push({
      name: "Infrastructure Type",
      impact: typeImpact,
      description: `${infraType.charAt(0).toUpperCase() + infraType.slice(1)} infrastructure carries elevated risk weighting.`,
    });
  }

  // Factor 5: Multiple high/critical defects
  const severeDefects = detections.filter(
    (d) => d.severity === "high" || d.severity === "critical"
  );
  if (severeDefects.length > 1) {
    const compoundingImpact = Math.min(severeDefects.length * 8, 20);
    totalScore += compoundingImpact;
    factors.push({
      name: "Severity Compounding",
      impact: compoundingImpact,
      description: `${severeDefects.length} high/critical defects detected. Combined severe defects significantly elevate risk.`,
    });
  }

  // Factor 6: Inspection history
  if (previousInspections > 0) {
    const historyImpact = Math.min(previousInspections * 3, 12);
    totalScore += historyImpact;
    factors.push({
      name: "Inspection History",
      impact: historyImpact,
      description: `${previousInspections} prior inspection(s) recorded. Repeat findings may indicate persistent deterioration.`,
    });
  }

  const riskScore = clamp(Math.round(totalScore), 0, 100);

  // Determine category
  let riskCategory: RiskCategory;
  if (riskScore >= 80) riskCategory = "CRITICAL";
  else if (riskScore >= 55) riskCategory = "HIGH";
  else if (riskScore >= 30) riskCategory = "MODERATE";
  else riskCategory = "LOW";

  // Determine priority
  let priority: Priority;
  if (riskScore >= 80) priority = "P1";
  else if (riskScore >= 55) priority = "P2";
  else if (riskScore >= 30) priority = "P3";
  else priority = "P4";

  // Build explanation
  const topFactors = [...factors]
    .sort((a, b) => b.impact - a.impact)
    .slice(0, 3);
  const explanation = `AI-assisted analysis detected ${detections.length} visible defect(s) with a maximum severity of "${maxSeverityDefect.severity}". The risk score of ${riskScore}/100 is driven primarily by: ${topFactors.map((f) => f.name.toLowerCase()).join(", ")}. This asset is classified as ${riskCategory} risk with ${priority} priority. Recommended for professional inspection.`;

  // Recommended action
  let recommendedAction: string;
  switch (priority) {
    case "P1":
      recommendedAction =
        "Immediate professional inspection required. Consider restricting access until assessed by a qualified engineer.";
      break;
    case "P2":
      recommendedAction =
        "Schedule urgent inspection within 1–2 weeks. Document current conditions and monitor for changes.";
      break;
    case "P3":
      recommendedAction =
        "Schedule inspection within 1–3 months. Include in next maintenance planning cycle.";
      break;
    default:
      recommendedAction =
        "Continue routine monitoring. Include in regular inspection schedule.";
  }

  return {
    riskScore,
    riskCategory,
    priority,
    explanation,
    factors,
    recommendedAction,
    disclaimer:
      "AI-assisted visual assessment — not a substitute for professional engineering inspection. Risk scores are decision-support tools and do not certify structural safety.",
  };
}

export function getDefectLabel(
  defectType: string,
  infraType: InfraType
): string {
  const labels: Record<string, string> = {
    longitudinal_crack: "Longitudinal Crack",
    transverse_crack: "Transverse Crack",
    alligator_crack: "Alligator Crack",
    pothole: "Pothole",
    crack: "Crack",
    spalling: "Spalling",
    exposed_reinforcement: "Exposed Reinforcement",
    seepage: "Seepage",
    corrosion: "Corrosion",
    other: "Other Defect",
  };
  return labels[defectType] ?? defectType;
}

export function getSeverityColor(severity: SeverityLevel): string {
  switch (severity) {
    case "critical":
      return "text-red-600 bg-red-50 border-red-200";
    case "high":
      return "text-orange-600 bg-orange-50 border-orange-200";
    case "medium":
      return "text-amber-600 bg-amber-50 border-amber-200";
    case "low":
      return "text-emerald-600 bg-emerald-50 border-emerald-200";
    default:
      return "text-gray-600 bg-gray-50 border-gray-200";
  }
}

export function getRiskColor(category: RiskCategory): string {
  switch (category) {
    case "CRITICAL":
      return "text-red-600 bg-red-50 border-red-200";
    case "HIGH":
      return "text-orange-600 bg-orange-50 border-orange-200";
    case "MODERATE":
      return "text-amber-600 bg-amber-50 border-amber-200";
    case "LOW":
      return "text-emerald-600 bg-emerald-50 border-emerald-200";
    default:
      return "text-gray-600 bg-gray-50 border-gray-200";
  }
}

export function getPriorityColor(priority: Priority): string {
  switch (priority) {
    case "P1":
      return "text-red-600 bg-red-50 border-red-200";
    case "P2":
      return "text-orange-600 bg-orange-50 border-orange-200";
    case "P3":
      return "text-amber-600 bg-amber-50 border-amber-200";
    case "P4":
      return "text-emerald-600 bg-emerald-50 border-emerald-200";
    default:
      return "text-gray-600 bg-gray-50 border-gray-200";
  }
}
