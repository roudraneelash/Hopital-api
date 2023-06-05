const express = require("express"); // Importing the express library
const router = express.Router(); // Creating an instance of the Express router
const patients_controller = require("../../../controller/api/v1/patients_controller"); // Importing the patients_controller module
const passport = require("passport"); // Importing the passport library for authentication

// Home page route
router.get("/", (req, res) => {
  return res.end("/api/v1/patients home page");
});
// Handling GET requests to the root ("/api/v1/patients") of the patients API. When a GET request is made to this path, it will execute the callback function and send the response "/api/v1/patients home page".

// Route to get all reports of a patient
router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  patients_controller.allReports
);
// Handling GET requests to the "/:id/all_reports" path. When a GET request is made to this path, it first authenticates the request using the "jwt" strategy of Passport (JSON Web Token authentication). If the authentication is successful, it calls the "allReports" function from the patients_controller module and executes the corresponding logic.

// Route to register a new patient
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patients_controller.register
);
// Handling POST requests to the "/register" path. When a POST request is made to this path, it first authenticates the request using the "jwt" strategy of Passport. If the authentication is successful, it calls the "register" function from the patients_controller module and executes the corresponding logic.

// Route to create a new report for a patient
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  patients_controller.createReport
);
// Handling POST requests to the "/:id/create_report" path. When a POST request is made to this path, it first authenticates the request using the "jwt" strategy of Passport. If the authentication is successful, it calls the "createReport" function from the patients_controller module and executes the corresponding logic.

module.exports = router;
// Exporting the router instance to be used in other files.
