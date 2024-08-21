import mongoose, { mongo } from "mongoose";
// const mongoose = require("mongoose");

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
    page_link: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
export const ImageGallaryModal =
  mongoose.models.image || mongoose.model("image", Schema);
