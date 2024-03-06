const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },

  model: {
    type: String,
    required: true,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: true,
    maxLength: 50,
  },
  diesel: {
    type: String,
    required: true,
    maxLength: 50,
  },
  selledAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  bookAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  image: {
    type: String,
    required: true,
  },

  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  token: {
    type: String,
  
  },
});
module.exports = mongoose.model("Car", CarSchema);
