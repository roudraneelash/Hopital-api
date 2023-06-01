const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.end("home page");
});
router.use("/v1", require("./v1"));

module.exports = router;
