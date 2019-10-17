const jwt = require("jsonwebtoken");
const elSecret = require("../config/secrets.js");

function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
    departments: user.departments,
  };
  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, elSecret.jwtSecret, options);
}

module.exports = generateToken;