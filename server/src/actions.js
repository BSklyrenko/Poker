const types = require("./constants/actions");

const addPlayer = data => ({
  type: types.ADD_PLAYER,
  payload: data
});

const removePlayer = data => ({
  type: types.REMOVE_PLAYER,
  payload: data
});

module.exports = {
  addPlayer,
  removePlayer
};
