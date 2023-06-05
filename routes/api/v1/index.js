const express = require("express"); // Importing the express library
const router = express.Router(); // Creating an instance of the Express router

router.get("/", (req, res) => {
  return res.end("API V1 home page");
});
// Handling GET requests to the root ("/") of the API V1. When a GET request is made to this path, it will execute the callback function and send the response "API V1 home page".

router.use("/doctors", require("./doctors_route"));
// Mounting the "./doctors_route" routes file to handle requests that start with "/doctors". Any requests that start with "/doctors" will be handled by the routes defined in the "./doctors_route" file.

router.use("/patients", require("./patients_route"));
// Mounting the "./patients_route" routes file to handle requests that start with "/patients". Any requests that start with "/patients" will be handled by the routes defined in the "./patients_route" file.

router.use("/reports", require("./reports_route"));
// Mounting the "./reports_route" routes file to handle requests that start with "/reports". Any requests that start with "/reports" will be handled by the routes defined in the "./reports_route" file.

module.exports = router;
// Exporting the router instance to be used in other files.
