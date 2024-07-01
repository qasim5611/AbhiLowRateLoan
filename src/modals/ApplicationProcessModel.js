import mongoose from "mongoose";
// const mongoose = require("mongoose");
const applicationModelSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  tagline: {
    type: String,
  },
  firstTitle: {
    type: String,
  },
  firstDesc: {
    type: String,
  },
  secondTitle: {
    type: String,
  },
  secondDesc: {
    type: String,
  },
  thirdTitle: {
    type: String,
  },
  thirdDesc: {
    type: String,
  },
  fourTitle: {
    type: String,
  },
  fourDesc: {
    type: String,
  },
  fifthTitle: {
    type: String,
  },
  fifthDesc: {
    type: String,
  },
  sixthTitle: {
    type: String,
  },
  sixthDesc: {
    type: String,
  },
});

const AppSection =
  mongoose.models.appsection ||
  mongoose.model("appsection", applicationModelSchema);
module.exports = AppSection;
