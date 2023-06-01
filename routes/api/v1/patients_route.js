const express = require("express");
const router = express.Router();
const patients_controller = require("../../../controller/api/v1/patients_controller");

router.get("/", (req, res) => {
  return res.end("/api/v1/patients  home page");
});

router.get("/:id/all_reports", patients_controller.allReports);

router.post("/register", patients_controller.register);
router.post("/:id/create_report", patients_controller.createReport);

module.exports = router;
