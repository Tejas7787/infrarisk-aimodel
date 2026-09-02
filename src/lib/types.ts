// Shared types and constants for InfraRisk AI

export const INFRA_TYPES = ["road", "bridge", "tunnel", "water", "power"] as const;
export type InfraType = (typeof INFRA_TYPES)[number];

export const RISK_CATEGORIES = ["LOW", "MODERATE", "HIGH", "CRITICAL"] as const;
export type RiskCategory = (typeof RISK_CATEGORIES)[number];

export const PRIORITIES = ["P4", "P3", "P2", "P1"] as const;
export type Priority = (typeof PRIORITIES)[number];

export const SEVERITY_LEVELS = ["low", "medium", "high", "critical"] as const;
export type SeverityLevel = (typeof SEVERITY_LEVELS)[number];

export const MAINTENANCE_STATUSES = [
  "new",
  "under_review",
  "inspection_required",
  "maintenance_planned",
  "resolved",
] as const;
export type MaintenanceStatus = (typeof MAINTENANCE_STATUSES)[number];

// Road defect types (targeting RDD2022 dataset)
export const ROAD_DEFECTS = [
  "longitudinal_crack",
  "transverse_crack",
  "alligator_crack",
  "pothole",
] as const;
export type RoadDefect = (typeof ROAD_DEFECTS)[number];

export const ROAD_DEFECT_LABELS: Record<RoadDefect, string> = {
  longitudinal_crack: "Longitudinal Crack",
  transverse_crack: "Transverse Crack",
  alligator_crack: "Alligator Crack",
  pothole: "Pothole",
};

// Bridge defect types (targeting GYU-DET dataset)
export const BRIDGE_DEFECTS = [
  "crack",
  "spalling",
  "exposed_reinforcement",
  "seepage",
  "corrosion",
  "other",
] as const;
export type BridgeDefect = (typeof BRIDGE_DEFECTS)[number];

export const BRIDGE_DEFECT_LABELS: Record<BridgeDefect, string> = {
  crack: "Crack",
  spalling: "Spalling",
  exposed_reinforcement: "Exposed Reinforcement",
  seepage: "Seepage",
  corrosion: "Corrosion",
  other: "Other Defect",
};

// Severity weights for risk calculation
export const SEVERITY_WEIGHTS: Record<SeverityLevel, number> = {
  low: 15,
  medium: 40,
  high: 70,
  critical: 95,
};

// Priority labels
export const PRIORITY_LABELS: Record<Priority, string> = {
  P1: "Critical — Immediate",
  P2: "High — Urgent",
  P3: "Moderate — Scheduled",
  P4: "Low — Monitor",
};

// Risk category labels
export const RISK_CATEGORY_LABELS: Record<RiskCategory, string> = {
  LOW: "Low Risk",
  MODERATE: "Moderate Risk",
  HIGH: "High Risk",
  CRITICAL: "Critical Risk",
};

// Infrastructure type display info
export const INFRA_TYPE_INFO: Record<
  InfraType,
  { label: string; description: string; icon: string }
> = {
  road: {
    label: "Roads",
    description: "Pavement defects, cracks, potholes, and surface degradation",
    icon: "🛣️",
  },
  bridge: {
    label: "Bridges",
    description: "Structural cracks, spalling, corrosion, and reinforcement exposure",
    icon: "🌉",
  },
  tunnel: {
    label: "Tunnels",
    description: "Lining defects, water ingress, and surface deterioration",
    icon: "🚇",
  },
  water: {
    label: "Water Infrastructure",
    description: "Pipe corrosion, leaks, and structural degradation",
    icon: "💧",
  },
  power: {
    label: "Power Infrastructure",
    description: "Tower integrity, insulator damage, and line sagging",
    icon: "⚡",
  },
};

// Demo asset data
export const DEMO_ASSETS = [
  {
    assetId: "RD-001",
    infraType: "road" as InfraType,
    location: "Highway 101, Mile Marker 42",
    latitude: 37.7749,
    longitude: -122.4194,
    status: "inspection_required" as MaintenanceStatus,
  },
  {
    assetId: "RD-002",
    infraType: "road" as InfraType,
    location: "Interstate 280, Exit 35",
    latitude: 37.7849,
    longitude: -122.4094,
    status: "new" as MaintenanceStatus,
  },
  {
    assetId: "BR-001",
    infraType: "bridge" as InfraType,
    location: "Golden Gate Approach, North Tower",
    latitude: 37.8199,
    longitude: -122.4783,
    status: "under_review" as MaintenanceStatus,
  },
  {
    assetId: "BR-002",
    infraType: "bridge" as InfraType,
    location: "Bay Bridge, Span 3",
    latitude: 37.7983,
    longitude: -122.3778,
    status: "maintenance_planned" as MaintenanceStatus,
  },
  {
    assetId: "TN-001",
    infraType: "tunnel" as InfraType,
    location: "Yerba Buena Tunnel",
    latitude: 37.8106,
    longitude: -122.3650,
    status: "new" as MaintenanceStatus,
  },
];

export const DEMO_INSPECTIONS = [
  {
    inspectionId: "INS-001",
    assetId: "RD-001",
    infraType: "road" as InfraType,
    location: "Highway 101, Mile Marker 42",
    createdAt: Date.now() - 86400000 * 2,
    detections: [
      { defectType: "alligator_crack", confidence: 0.87, severity: "high" as SeverityLevel },
      { defectType: "pothole", confidence: 0.92, severity: "critical" as SeverityLevel },
    ],
    riskScore: 82,
    riskCategory: "HIGH" as RiskCategory,
    priority: "P2" as Priority,
  },
  {
    inspectionId: "INS-002",
    assetId: "RD-002",
    infraType: "road" as InfraType,
    location: "Interstate 280, Exit 35",
    createdAt: Date.now() - 86400000 * 5,
    detections: [
      { defectType: "longitudinal_crack", confidence: 0.74, severity: "medium" as SeverityLevel },
    ],
    riskScore: 35,
    riskCategory: "LOW" as RiskCategory,
    priority: "P4" as Priority,
  },
  {
    inspectionId: "INS-003",
    assetId: "BR-001",
    infraType: "bridge" as InfraType,
    location: "Golden Gate Approach, North Tower",
    createdAt: Date.now() - 86400000 * 1,
    detections: [
      { defectType: "crack", confidence: 0.91, severity: "high" as SeverityLevel },
      { defectType: "spalling", confidence: 0.78, severity: "medium" as SeverityLevel },
      { defectType: "corrosion", confidence: 0.65, severity: "medium" as SeverityLevel },
    ],
    riskScore: 71,
    riskCategory: "HIGH" as RiskCategory,
    priority: "P2" as Priority,
  },
  {
    inspectionId: "INS-004",
    assetId: "BR-002",
    infraType: "bridge" as InfraType,
    location: "Bay Bridge, Span 3",
    createdAt: Date.now() - 86400000 * 7,
    detections: [
      { defectType: "crack", confidence: 0.95, severity: "critical" as SeverityLevel },
      { defectType: "exposed_reinforcement", confidence: 0.88, severity: "critical" as SeverityLevel },
    ],
    riskScore: 94,
    riskCategory: "CRITICAL" as RiskCategory,
    priority: "P1" as Priority,
  },
  {
    inspectionId: "INS-005",
    assetId: "RD-001",
    infraType: "road" as InfraType,
    location: "Highway 101, Mile Marker 42",
    createdAt: Date.now() - 86400000 * 14,
    detections: [
      { defectType: "transverse_crack", confidence: 0.68, severity: "low" as SeverityLevel },
    ],
    riskScore: 22,
    riskCategory: "LOW" as RiskCategory,
    priority: "P4" as Priority,
  },
];
