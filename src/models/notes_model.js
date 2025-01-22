const mongoose = require("mongoose");
const constants = require("../utils/constants");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(constants.models.NOTES, noteSchema);
