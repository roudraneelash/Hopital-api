const express = require("express");
const router = express.Router();
const doctors_controller = require("../../../controller/api/v1/doctors_controller");

router.get("/", (req, res) => {
  return res.end("/api/v1/doctors  home page");
});

router.post("/register", doctors_controller.register);
router.post("/login", doctors_controller.createSession);

module.exports = router;
