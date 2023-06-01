const express = require("express");
const router = express.Router();
const reports_controller = require("../../../controller/api/v1/reports_controller");

router.get("/", (req, res) => {
  return res.end("/api/v1/reports  home page");
});
router.get("/:status", reports_controller.reports);

module.exports = router;
