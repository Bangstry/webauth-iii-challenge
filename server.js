const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("./middleware/logger.js");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/user-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.use("/api", authRouter);
server.use("/api/users", usersRouter);



module.exports = server;