import mongoose, { mongo } from "mongoose";
// const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    tagline: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
export const ApplicationProcessModel =
  mongoose.models.appprocess || mongoose.model("appprocess", Schema);
