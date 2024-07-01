import mongoose from "mongoose";
// const mongoose = require("mongoose");
const heroModelSchema = new mongoose.Schema({
  id: {
    type: String,
    default: "admin0011",
  },
  tagline: {
    type: String,
  },
  refinancebtn: {
    type: String,
  },
  lownbtn: {
    type: String,
  },
});

const HeroSection =
  mongoose.models.herosection || mongoose.model("herosection", heroModelSchema);
module.exports = HeroSection;
