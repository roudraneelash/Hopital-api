const db = require("./config/mongoose");
const express = require("express");
const port = 8080;
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log("server is up and running on port", port);
});
