const nanoid = require("nanoid");

function createPlayer() {
  return {
    id: nanoid()
  };
}

module.exports = createPlayer;
