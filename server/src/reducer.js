const ramda = require('ramda');
const types = require('src/constants/actions');
const CARDS = require('src/constants/cards');
const shuffle = require('src/lib/random_shuffle');

const initialState = {
  players: {
    computer: {
      id: 'computer',
    },
  },
  cards: shuffle(ramda.values(ramda.filter((value) => value !== CARDS.BACK, CARDS))),
};

function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [payload.id]: {
            ...payload,
            cards: [state.cards[0], state.cards[1]],
          },
          computer: {
            ...state.players.computer,
            cards: [state.cards[2], state.cards[3]],
          },
        },
        cards: ramda.drop(4, state.cards),
      };

    case types.REMOVE_PLAYER:
      return {
        ...state,
        players: ramda.filter(({ id }) => id !== payload, state.players),
      };

    default:
      return state;
  }
}

module.exports = reducer;
