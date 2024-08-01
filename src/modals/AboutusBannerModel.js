import mongoose, { mongo } from "mongoose";

const Schema = new mongoose.Schema(
  {
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
export const AboutusBannerModel =
  mongoose.models.aboutusbannersection ||
  mongoose.model("aboutusbannersection", Schema);
