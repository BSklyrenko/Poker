const types = require("./constants/actions");

const initialState = {
  players: [
    {
      id: "computer"
    }
  ]
};

function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, payload]
      };

    case types.REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(({ id }) => id !== payload)
      };

    default:
      return state;
  }
}

module.exports = reducer;
