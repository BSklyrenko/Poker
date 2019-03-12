const nanoid = require('nanoid');

function create_player() {
  return {
    id: nanoid(),
  };
}

module.exports = create_player;
