import mongoose, { mongo } from "mongoose";
// const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    whyRefinnancing: {
      type: String,
    },
    loanAmount: {
      type: String,
    },
    interestRate: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
export const RefinanceConsultModel =
  mongoose.models.refinanceconsult ||
  mongoose.model("refinanceconsult", Schema);
