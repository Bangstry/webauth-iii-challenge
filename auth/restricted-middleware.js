const jwt = require("jsonwebtoken");

const elSecret = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, elSecret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Not so fast!" });
      } else {
        req.user = {
          username: decodedToken.username,
          departments: decodedToken.departments,
        };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Nice try guy.." });
  }
};