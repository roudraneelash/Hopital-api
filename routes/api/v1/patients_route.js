const express = require("express");
const router = express.Router();
const patients_controller = require("../../../controller/api/v1/patients_controller");
const passport = require("passport");

// Home page route
router.get("/", (req, res) => {
  return res.end("/api/v1/patients home page");
});

// Route to get all reports of a patient
router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  patients_controller.allReports
);

// Route to register a new patient
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patients_controller.register
);

// Route to create a new report for a patient
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  patients_controller.createReport
);

module.exports = router;
