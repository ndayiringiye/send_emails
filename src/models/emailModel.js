const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  html: { type: String, required: true },
}, { timestamps: true });

const Email = mongoose.model("Email", EmailSchema);
module.exports = Email;
