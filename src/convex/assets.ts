import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("assets")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

export const getByInfraType = query({
  args: { userId: v.id("users"), infraType: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("assets")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect()
      .then((assets) => assets.filter((a) => a.infraType === args.infraType));
  },
});

export const get = query({
  args: { id: v.id("assets") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    userId: v.id("users"),
    assetId: v.string(),
    infraType: v.string(),
    location: v.optional(v.string()),
    latitude: v.optional(v.number()),
    longitude: v.optional(v.number()),
    notes: v.optional(v.string()),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("assets", {
      userId: args.userId,
      assetId: args.assetId,
      infraType: args.infraType,
      location: args.location,
      latitude: args.latitude,
      longitude: args.longitude,
      notes: args.notes,
      status: args.status ?? "new",
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("assets"),
    location: v.optional(v.string()),
    latitude: v.optional(v.number()),
    longitude: v.optional(v.number()),
    notes: v.optional(v.string()),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    const updates: Record<string, unknown> = { updatedAt: Date.now() };
    if (fields.location !== undefined) updates.location = fields.location;
    if (fields.latitude !== undefined) updates.latitude = fields.latitude;
    if (fields.longitude !== undefined) updates.longitude = fields.longitude;
    if (fields.notes !== undefined) updates.notes = fields.notes;
    if (fields.status !== undefined) updates.status = fields.status;
    await ctx.db.patch(id, updates);
  },
});

export const remove = mutation({
  args: { id: v.id("assets") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
