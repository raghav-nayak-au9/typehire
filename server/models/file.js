const mongoose = require("mongoose");

const { Schema } = mongoose;

const fileSchema = new Schema(
  {
    userId: {
      type: Number,
    },
    id: {
      type: Number,
      unique: true,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
