const rt = require("express").Router();

const Users = require("./user-model.js");
const restricted = require("../auth/restricted-middleware.js");

rt.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ loggedInUser: req.user.username, users });
    })
    .catch(err => res.send(err));
});

module.exports = rt;