import mongoose from "mongoose";
// const mongoose = require("mongoose");
const heroModelSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "FAQS",
  },
  tagline: {
    type: String,
  },
  faq1: [
    {
      title: { type: String },
      desc: { type: String },
    },
  ],
  faq2: [
    {
      title: { type: String },
      desc: { type: String },
    },
  ],
  faq3: [
    {
      title: { type: String },
      desc: { type: String },
    },
  ],
  faq4: [
    {
      title: { type: String },
      desc: { type: String },
    },
  ],
  faq5: [
    {
      title: { type: String },
      desc: { type: String },
    },
  ],
  faq6: [
    {
      title: { type: String },
      desc: { type: String },
    },
  ],
});

const HeroSection =
  mongoose.models.herosection || mongoose.model("herosection", heroModelSchema);
module.exports = HeroSection;
