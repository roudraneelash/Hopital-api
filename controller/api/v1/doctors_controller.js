const Doctor = require("../../../model/doctor"); // Import the Doctor model
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  try {
    if (req.body.password !== req.body.confirm_password) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    } else {
      // Check if an existing account is found
      const doc = await Doctor.findOne({
        email: req.body.email,
      });

      if (!doc) {
        const newDoc = await Doctor.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        if (newDoc) {
          return res.status(201).json({
            message: "User created successfully",
            user: newDoc, // Include the created user in the response
          });
        }
      } else {
        return res.status(409).json({
          message: "User already exists",
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      message: "Error in registering doctor",
      error: err.message, // Include the error message for debugging purposes
    });
  }
};

module.exports.createSession = async (req, res) => {
  try {
    // Find the doctor with the provided email
    const doctor = await Doctor.findOne({
      email: req.body.email,
    });

    //Check if the doctor exists and verify the password
    if (!doctor || doctor.password != req.body.password) {
      return res.status(422).json({
        message: "Invalid username/password",
      });
    } else {
      // Generate a JWT token for the authenticated doctor
      //second parameter is the secret key
      const token = jwt.sign(doctor.toJSON(), "secret", {
        expiresIn: "1000000",
      });

      return res.status(200).json({
        message: "Sign in successful, here is your token",
        data: {
          token: token,
        },
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message, // Include the error message for debugging purposes
    });
  }
};
