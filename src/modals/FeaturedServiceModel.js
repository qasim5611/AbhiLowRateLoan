import mongoose from "mongoose";
// const mongoose = require("mongoose");
const heroModelSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  service1title: {
    type: String,
  },
  service1image: {
    type: String,
  },
  service2title: {
    type: String,
  },
  service2image: {
    type: String,
  },
  service3title: {
    type: String,
  },
  service3image: {
    type: String,
  },
});

const HeroSection =
  mongoose.models.herosection || mongoose.model("herosection", heroModelSchema);
module.exports = HeroSection;
