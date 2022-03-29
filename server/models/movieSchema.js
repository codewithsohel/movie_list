const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    year: { type: String },
    min: { type: String },
    image: { type: String },
    description: {
      type: String,
    },
    rating: {
      type: String,
    },
  },

  {
    timestamps: [{ createdAt: "created_at", updatedAt: "updated_at" }],
  }
);

module.exports = mongoose.model("Movie", MovieSchema);
