import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

// Infrastructure types
export const INFRA_TYPES = [
  "road",
  "bridge",
  "tunnel",
  "water",
  "power",
] as const;
export type InfraType = (typeof INFRA_TYPES)[number];

// Risk categories
export const RISK_CATEGORIES = ["LOW", "MODERATE", "HIGH", "CRITICAL"] as const;
export type RiskCategory = (typeof RISK_CATEGORIES)[number];

// Priority levels
export const PRIORITIES = ["P4", "P3", "P2", "P1"] as const;
export type Priority = (typeof PRIORITIES)[number];

// Maintenance statuses
export const MAINTENANCE_STATUSES = [
  "new",
  "under_review",
  "inspection_required",
  "maintenance_planned",
  "resolved",
] as const;
export type MaintenanceStatus = (typeof MAINTENANCE_STATUSES)[number];

// Severity levels
export const SEVERITY_LEVELS = ["low", "medium", "high", "critical"] as const;
export type SeverityLevel = (typeof SEVERITY_LEVELS)[number];

const schema = defineSchema(
  {
    ...authTables,

    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    // Infrastructure assets
    assets: defineTable({
      userId: v.id("users"),
      assetId: v.string(), // user-assigned identifier
      infraType: v.string(),
      location: v.optional(v.string()),
      latitude: v.optional(v.number()),
      longitude: v.optional(v.number()),
      notes: v.optional(v.string()),
      status: v.string(), // MaintenanceStatus
      createdAt: v.number(),
      updatedAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_infra_type", ["infraType"])
      .index("by_status", ["status"]),

    // Uploaded images
    images: defineTable({
      userId: v.id("users"),
      assetId: v.optional(v.id("assets")),
      storageId: v.string(),
      fileName: v.string(),
      fileSize: v.number(),
      mimeType: v.string(),
      infraType: v.string(),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_asset", ["assetId"]),

    // Inspection sessions
    inspections: defineTable({
      userId: v.id("users"),
      assetId: v.id("assets"),
      imageId: v.id("images"),
      infraType: v.string(),
      location: v.optional(v.string()),
      notes: v.optional(v.string()),
      status: v.string(), // "pending" | "analyzing" | "completed" | "failed"
      createdAt: v.number(),
      completedAt: v.optional(v.number()),
    })
      .index("by_user", ["userId"])
      .index("by_asset", ["assetId"])
      .index("by_status", ["status"]),

    // Individual defect detections
    detections: defineTable({
      inspectionId: v.id("inspections"),
      userId: v.id("users"),
      defectType: v.string(),
      confidence: v.number(), // 0-1
      severity: v.string(), // SeverityLevel
      bboxX: v.optional(v.number()),
      bboxY: v.optional(v.number()),
      bboxWidth: v.optional(v.number()),
      bboxHeight: v.optional(v.number()),
      description: v.optional(v.string()),
      createdAt: v.number(),
    })
      .index("by_inspection", ["inspectionId"])
      .index("by_user", ["userId"]),

    // Risk assessments
    riskAssessments: defineTable({
      inspectionId: v.id("inspections"),
      userId: v.id("users"),
      assetId: v.id("assets"),
      riskScore: v.number(), // 0-100
      riskCategory: v.string(), // RiskCategory
      priority: v.string(), // Priority
      explanation: v.string(),
      factors: v.array(
        v.object({
          name: v.string(),
          impact: v.number(),
          description: v.string(),
        })
      ),
      recommendedAction: v.string(),
      disclaimer: v.string(),
      createdAt: v.number(),
    })
      .index("by_inspection", ["inspectionId"])
      .index("by_user", ["userId"])
      .index("by_asset", ["assetId"])
      .index("by_priority", ["priority"]),

    // Maintenance actions / history
    maintenanceActions: defineTable({
      userId: v.id("users"),
      assetId: v.id("assets"),
      inspectionId: v.optional(v.id("inspections")),
      action: v.string(),
      status: v.string(),
      notes: v.optional(v.string()),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_asset", ["assetId"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;
