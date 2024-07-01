import mongoose from "mongoose";
// const mongoose = require("mongoose");
const testimonialModelSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "CLIENTS TESTIMONIALS",
  },
  tagline: {
    type: String,
  },
  name: {
    type: String,
  },
  rating: {
    type: String,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
});

const TestimonialSection =
  mongoose.models.testimonialsection ||
  mongoose.model("testimonialsection", testimonialModelSchema);
module.exports = TestimonialSection;
