const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.end("home page");
});
router.use("/api", require("./api"));

module.exports = router;
