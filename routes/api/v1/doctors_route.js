const express = require("express"); // Importing the express library
const router = express.Router(); // Creating an instance of the Express router
const doctors_controller = require("../../../controller/api/v1/doctors_controller"); // Importing the doctors_controller module

router.get("/", (req, res) => {
  return res.end("/api/v1/doctors home page");
});
// Handling GET requests to the root ("/api/v1/doctors") of the doctors API. When a GET request is made to this path, it will execute the callback function and send the response "api/v1/doctors home page".

router.post("/register", doctors_controller.register);
// Handling POST requests to the "/register" path. When a POST request is made to this path, it will call the "register" function from the doctors_controller module and execute the corresponding logic.

router.post("/login", doctors_controller.createSession);
// Handling POST requests to the "/login" path. When a POST request is made to this path, it will call the "createSession" function from the doctors_controller module and execute the corresponding logic.

module.exports = router;
// Exporting the router instance to be used in other files.
