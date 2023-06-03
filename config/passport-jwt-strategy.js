const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const Doctor = require("../model/doctor");

// Set up options for JWT authentication strategy
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

// Configure the JWT authentication strategy for passport
passport.use(
  new JWTStrategy(opts, async function (jwt_payload, done) {
    try {
      // Find the doctor by ID in the JWT payload
      const user = await Doctor.findById(jwt_payload._id);

      if (user) {
        // Doctor found, pass the user object to the next middleware
        return done(null, user);
      } else {
        // Doctor not found, authentication fails
        return done(null, false);
      }
    } catch (err) {
      console.log("Error in finding doctor from JWT");
      return done(err, false);
    }
  })
);

module.exports = passport;
