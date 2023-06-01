const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    doctor: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {}
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
