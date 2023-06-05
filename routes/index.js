const express = require("express"); // Importing the express library
const router = express.Router(); // Creating an instance of the Express router

router.get("/", (req, res) => {
  return res.end("home page");
});
// Handling GET requests to the root ("/") of the server. When a GET request is made to the root, it will execute the callback function, and "home page" will be sent as the response.

router.use("/api", require("./api"));
// Mounting the "./api" routes file to handle requests that start with "/api". Any requests that start with "/api" will be handled by the routes defined in the "./api" file.

module.exports = router;
// Exporting the router instance to be used in other files.
