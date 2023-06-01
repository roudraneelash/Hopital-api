const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.end("API V1 home page");
});
router.use("/doctors", require("./doctors_route"));
router.use("/patients", require("./patients_route"));
router.use("/reports", require("./reports_route"));

module.exports = router;
