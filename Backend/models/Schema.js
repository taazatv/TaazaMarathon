// models/Runner.js
const mongoose = require("mongoose");

const runnerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  mobile: { type: String, required: true, unique: true, match: /^\d{10}$/ },
  email: { type: String, required: true, lowercase: true },
  dob: { type: String, required: true }, // "YYYY-MM-DD"
  bloodGroup: { type: String, required: true },
  gender: { type: String, required: true },
  distance: { type: String, required: true }, // 2km, 5km, 10km, 21km
  tshirtSize: { type: String, required: true },
  emergencyContact: { type: String },
  runningClub: { type: String },
  medicalHistory: { type: String },
  couponCode: { type: String, default: "N/A" },
  amountPaid: { type: Number, required: true }, // 100, 200, 350, 600
  bibNumber: { type: String, unique: true }, // Will generate later
  registrationDate: { type: String, default: () => new Date().toLocaleDateString("en-GB") },
  eventDate: { type: String, default: "28-12-2025" }, // Change if needed
}, { timestamps: true });

module.exports = mongoose.model("Runner", runnerSchema);