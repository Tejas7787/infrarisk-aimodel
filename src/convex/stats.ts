import { v } from "convex/values";
import { query } from "./_generated/server";

export const getDashboardStats = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const assets = await ctx.db
      .query("assets")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    const inspections = await ctx.db
      .query("inspections")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    const riskAssessments = await ctx.db
      .query("riskAssessments")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    const detections = await ctx.db
      .query("detections")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    // Aggregate stats
    const totalAssets = assets.length;
    const highRiskAssets = riskAssessments.filter(
      (r) => r.riskCategory === "HIGH" || r.riskCategory === "CRITICAL"
    ).length;
    const criticalAssets = riskAssessments.filter(
      (r) => r.riskCategory === "CRITICAL"
    ).length;
    const totalInspections = inspections.length;
    const completedInspections = inspections.filter(
      (i) => i.status === "completed"
    ).length;

    // Infrastructure type distribution
    const infraTypeDistribution: Record<string, number> = {};
    assets.forEach((a) => {
      infraTypeDistribution[a.infraType] =
        (infraTypeDistribution[a.infraType] || 0) + 1;
    });

    // Risk distribution
    const riskDistribution: Record<string, number> = { LOW: 0, MODERATE: 0, HIGH: 0, CRITICAL: 0 };
    riskAssessments.forEach((r) => {
      riskDistribution[r.riskCategory] =
        (riskDistribution[r.riskCategory] || 0) + 1;
    });

    // Defect distribution
    const defectDistribution: Record<string, number> = {};
    detections.forEach((d) => {
      defectDistribution[d.defectType] =
        (defectDistribution[d.defectType] || 0) + 1;
    });

    // Priority distribution
    const priorityDistribution: Record<string, number> = { P1: 0, P2: 0, P3: 0, P4: 0 };
    riskAssessments.forEach((r) => {
      priorityDistribution[r.priority] =
        (priorityDistribution[r.priority] || 0) + 1;
    });

    // Recent inspections (last 10)
    const recentInspections = inspections
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 10);

    // Alerts: critical/high risk items
    const alerts = riskAssessments
      .filter((r) => r.riskCategory === "CRITICAL" || r.riskCategory === "HIGH")
      .sort((a, b) => b.riskScore - a.riskScore)
      .slice(0, 5);

    return {
      totalAssets,
      highRiskAssets,
      criticalAssets,
      totalInspections,
      completedInspections,
      infraTypeDistribution,
      riskDistribution,
      defectDistribution,
      priorityDistribution,
      recentInspections,
      alerts,
      totalDetections: detections.length,
    };
  },
});

export const getPriorityQueue = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const assets = await ctx.db
      .query("assets")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    const riskAssessments = await ctx.db
      .query("riskAssessments")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    const inspections = await ctx.db
      .query("inspections")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    const detections = await ctx.db
      .query("detections")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    // Build priority queue entries
    const assetMap = new Map(assets.map((a) => [a._id, a]));
    const inspectionMap = new Map(inspections.map((i) => [i._id, i]));

    const queue = riskAssessments
      .map((risk) => {
        const asset = assetMap.get(risk.assetId);
        const inspection = inspectionMap.get(risk.inspectionId);
        const inspectionDetections = detections.filter(
          (d) => d.inspectionId === risk.inspectionId
        );
        const topDefect = inspectionDetections.sort(
          (a, b) => b.confidence - a.confidence
        )[0];

        return {
          riskAssessment: risk,
          asset,
          inspection,
          topDefect: topDefect?.defectType ?? "N/A",
          topSeverity: topDefect?.severity ?? "N/A",
          defectCount: inspectionDetections.length,
        };
      })
      .sort((a, b) => {
        const priorityOrder: Record<string, number> = {
          P1: 0,
          P2: 1,
          P3: 2,
          P4: 3,
        };
        return (
          (priorityOrder[a.riskAssessment.priority] ?? 4) -
          (priorityOrder[b.riskAssessment.priority] ?? 4)
        );
      });

    return queue;
  },
});
