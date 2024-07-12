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
    loanAmount: {
      type: String,
    },
    interestRate: {
      type: String,
    },
    whyRefinnancing: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
export const BuyHomeConsultModel =
  mongoose.models.buyhomeconsult || mongoose.model("buyhomeconsult", Schema);
