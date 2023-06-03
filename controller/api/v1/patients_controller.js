const Patient = require("../../../model/patient"); // Import the Patient model
const Report = require("../../../model/report");

module.exports.register = async (req, res) => {
  try {
    const { phone, name } = req.body;

    if (!phone || !name) {
      return res.status(400).json({
        message: "Invalid patient data",
        error: "Phone and name fields are required",
      });
    }

    const patient = await Patient.findOne({ phone });

    if (patient) {
      return res.status(409).json({
        patient,
        message: "Patient already registered",
      });
    } else {
      const newPatient = await Patient.create({
        phone,
        name,
      });

      return res.status(201).json({
        patient: newPatient,
        message: "Patient registered successfully",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Error in registering patient",
      error: err.message,
    });
  }
};

module.exports.allReports = async (req, res) => {
  try {
    const patientId = req.params.id;
    //ascending order
    const reports = await Report.find({ patient: patientId }).sort({ date: 1 });
    res.status(200).json({ reports });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve reports" });
  }
};

module.exports.createReport = async (req, res) => {
  try {
    const report = await Report.create({
      patient: req.params.id,
      doctor: req.body.doctor,
      status: req.body.status,
      date: new Date(), // Set the current date
    });

    res.status(200).json({ report, message: "Successfully created report" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create report" });
  }
};
