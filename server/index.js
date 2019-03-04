const express = require("express");
const http = require("http");
const socket = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socket(server);

const config = require("./config");

io.on("connection", socket => {
  console.log(`Connection established with ${socket.handshake.headers.origin}`);
});

server.listen(config.port, () => {
  console.log(`Server listen on ${config.port}`);
});
