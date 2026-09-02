import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const listByUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("images")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

export const get = query({
  args: { id: v.id("images") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    userId: v.id("users"),
    assetId: v.optional(v.id("assets")),
    storageId: v.string(),
    fileName: v.string(),
    fileSize: v.number(),
    mimeType: v.string(),
    infraType: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("images", {
      userId: args.userId,
      assetId: args.assetId,
      storageId: args.storageId,
      fileName: args.fileName,
      fileSize: args.fileSize,
      mimeType: args.mimeType,
      infraType: args.infraType,
      createdAt: Date.now(),
    });
  },
});
