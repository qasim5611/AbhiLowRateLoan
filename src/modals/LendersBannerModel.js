import mongoose, { mongo } from "mongoose";

const Schema = new mongoose.Schema(
  {
    tagline: {
      type: String,
    },
    image_url: {
      type: String,
    },
    public_id: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
export const LenderBannerModal =
  mongoose.models.lendersection || mongoose.model("lendersection", Schema);
