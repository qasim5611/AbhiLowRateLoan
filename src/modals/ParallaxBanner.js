import mongoose from "mongoose";
// const mongoose = require("mongoose");
const parallexModelSchema = new mongoose.Schema({
  Image: {
    type: String,
  },
});

const ParallexSection =
  mongoose.models.parallex || mongoose.model("parallex", parallexModelSchema);
module.exports = ParallexSection;
