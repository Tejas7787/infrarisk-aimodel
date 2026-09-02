import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// ---- Inspections ----

export const listByUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("inspections")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

export const listByAsset = query({
  args: { assetId: v.id("assets") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("inspections")
      .withIndex("by_asset", (q) => q.eq("assetId", args.assetId))
      .order("desc")
      .collect();
  },
});

export const get = query({
  args: { id: v.id("inspections") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    userId: v.id("users"),
    assetId: v.id("assets"),
    imageId: v.id("images"),
    infraType: v.string(),
    location: v.optional(v.string()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("inspections", {
      userId: args.userId,
      assetId: args.assetId,
      imageId: args.imageId,
      infraType: args.infraType,
      location: args.location,
      notes: args.notes,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

export const complete = mutation({
  args: { id: v.id("inspections") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "completed",
      completedAt: Date.now(),
    });
  },
});

export const fail = mutation({
  args: { id: v.id("inspections"), reason: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "failed",
      notes: args.reason,
    });
  },
});

// ---- Detections ----

export const listDetectionsByInspection = query({
  args: { inspectionId: v.id("inspections") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("detections")
      .withIndex("by_inspection", (q) =>
        q.eq("inspectionId", args.inspectionId)
      )
      .collect();
  },
});

export const createDetection = mutation({
  args: {
    inspectionId: v.id("inspections"),
    userId: v.id("users"),
    defectType: v.string(),
    confidence: v.number(),
    severity: v.string(),
    bboxX: v.optional(v.number()),
    bboxY: v.optional(v.number()),
    bboxWidth: v.optional(v.number()),
    bboxHeight: v.optional(v.number()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("detections", {
      inspectionId: args.inspectionId,
      userId: args.userId,
      defectType: args.defectType,
      confidence: args.confidence,
      severity: args.severity,
      bboxX: args.bboxX,
      bboxY: args.bboxY,
      bboxWidth: args.bboxWidth,
      bboxHeight: args.bboxHeight,
      description: args.description,
      createdAt: Date.now(),
    });
  },
});

// ---- Risk Assessments ----

export const listRiskByUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("riskAssessments")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

export const getRiskByInspection = query({
  args: { inspectionId: v.id("inspections") },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("riskAssessments")
      .withIndex("by_inspection", (q) =>
        q.eq("inspectionId", args.inspectionId)
      )
      .collect();
    return results[0] ?? null;
  },
});

export const createRiskAssessment = mutation({
  args: {
    inspectionId: v.id("inspections"),
    userId: v.id("users"),
    assetId: v.id("assets"),
    riskScore: v.number(),
    riskCategory: v.string(),
    priority: v.string(),
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
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("riskAssessments", {
      inspectionId: args.inspectionId,
      userId: args.userId,
      assetId: args.assetId,
      riskScore: args.riskScore,
      riskCategory: args.riskCategory,
      priority: args.priority,
      explanation: args.explanation,
      factors: args.factors,
      recommendedAction: args.recommendedAction,
      disclaimer: args.disclaimer,
      createdAt: Date.now(),
    });
  },
});
