const Report = require("../../../model/report");

module.exports.reports = async (req, res) => {
  try {
    const report = await Report.find({ status: req.params.status });
    if (report) {
      return res.status(200).json({
        report,
        message: "Report with specific status",
      });
    } else {
      return res.status(400).json({
        message: "Error in fetching reports by status",
      });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to create report" });
  }
};
