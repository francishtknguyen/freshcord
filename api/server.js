const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const server = express();
server.use(express.static(path.join(__dirname, "../client/build")));
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
server.use((err, req, res, next /*eslint-disable-line */) => {
  res.status(err.status || 500).json({
    note: "Houston, we have a problem!!!",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
