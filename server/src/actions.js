const types = require("./constants/actions");

const add_player = data => ({
  type: types.ADD_PLAYER,
  payload: data
});

const remove_player = data => ({
  type: types.REMOVE_PLAYER,
  payload: data
});

module.exports = {
  add_player,
  remove_player
};
