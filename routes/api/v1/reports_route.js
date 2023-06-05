const express = require("express"); // Importing the express library
const router = express.Router(); // Creating an instance of the Express router
const reports_controller = require("../../../controller/api/v1/reports_controller"); // Importing the reports_controller module
const passport = require("passport"); // Importing the passport library for authentication

router.get("/", (req, res) => {
  return res.end("/api/v1/reports home page");
});
// Handling GET requests to the root ("/api/v1/reports") of the reports API. When a GET request is made to this path, it will execute the callback function and send the response "/api/v1/reports home page".

router.get(
  "/:status",
  passport.authenticate("jwt", { session: false }),
  reports_controller.reports
);
// Handling GET requests to the "/:status" path. When a GET request is made to this path, it first authenticates the request using the "jwt" strategy of Passport. If the authentication is successful, it calls the "reports" function from the reports_controller module and executes the corresponding logic. The ":status" parameter in the path allows specifying a particular status for the reports.

module.exports = router;
// Exporting the router instance to be used in other files.
