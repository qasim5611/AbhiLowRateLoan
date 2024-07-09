// import mongoose from "mongoose";
// // const mongoose = require("mongoose");
// const LendersModelSchema = new mongoose.Schema({
//   lendertitle: {
//     type: String,
//   },
//   image: {
//     type: String,
//   },
// });
// const LenderSection =
//   mongoose.models.lendersection ||
//   mongoose.model("lendersection", LendersModelSchema);
// module.exports = LenderSection;

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
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
export const LenderBannerModal =
  mongoose.models.lendersection || mongoose.model("lendersection", Schema);
