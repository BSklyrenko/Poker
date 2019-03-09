const express = require("express");
const http = require("http");
const socket = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socket(server);

const config = require("./config");
const store = require("./src/store");
const actions = require("./src/actions");
const createPlayer = require("./src/lib/createPlayer");

io.on("connection", socket => {
  console.log(`Connection established with ${socket.handshake.headers.origin}`);
  const player = createPlayer();
  store.dispatch(actions.addPlayer(player));

  socket.on("disconnect", () => {
    console.log(
      `Connection was closed with ${socket.handshake.headers.origin}`
    );
    store.dispatch(actions.removePlayer(player.id));
  });
});

store.subscribe(() => {
  const newStore = store.getState();
  console.log("Store update");
  console.log(newStore);
  io.emit("frame", newStore);
});

server.listen(config.port, () => {
  console.log(`Server listen on ${config.port}`);
});
