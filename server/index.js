const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.Server(app);
const io = socket(server);

const config = require('config');
const store = require('src/store');
const actions = require('src/actions');
const create_player = require('src/lib/create_player');
const cards_config = require('src/cards_map');

app.use(express.static(__dirname + '/public'));
app.use(cors());

io.on('connection', (socket) => {
  console.log(`Connection established with ${socket.handshake.headers.origin}`);
  const player = create_player();
  store.dispatch(actions.add_player(player));

  socket.on('disconnect', () => {
    console.log(`Connection was closed with ${socket.handshake.headers.origin}`);
    store.dispatch(actions.remove_player(player.id));
  });
});

store.subscribe(() => {
  const newStore = store.getState();
  io.emit('frame', newStore);
});

server.listen(config.port, () => {
  console.log(`Server listen on ${config.port}`);
});

app.get('/config', (req, res) => {
  res.json(cards_config);
});
