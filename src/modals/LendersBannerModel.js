import mongoose from "mongoose";
// const mongoose = require("mongoose");
const LendersModelSchema = new mongoose.Schema({
  lendertitle: {
    type: String,
  },
  image: {
    type: String,
  },
});
const LenderSection =
  mongoose.models.lendersection ||
  mongoose.model("lendersection", LendersModelSchema);
module.exports = LenderSection;
