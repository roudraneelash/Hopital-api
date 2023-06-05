const db = require("./config/mongoose"); // Importing the mongoose configuration file to establish a connection with the database
const express = require("express"); // Importing the express library
const port = 8080; // Setting the port number for the server
const app = express(); // Creating an instance of the express application
const passport = require("passport"); // Importing the passport library for authentication
const passportJWT = require("./config/passport-jwt-strategy"); // Importing the JWT authentication strategy for passport

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false })); // Middleware to parse incoming requests with URL-encoded payloads

app.use("/", require("./routes")); // Mounting the routes file to handle incoming requests

app.listen(port, () => {
  console.log("server is up and running on port", port); // Starting the server and logging a message to indicate that the server is running
});
