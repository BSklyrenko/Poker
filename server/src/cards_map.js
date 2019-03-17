// const config = require('config')
const CARDS = require('src/constants/cards');
const config = require('config');
// console.log(process.env)

const cards_map = {
  [CARDS.CLUBS_2]: {
    id: CARDS.CLUBS_2,
    img: `${config.host}:${config.port}/images/cards/2_of_clubs.svg`,
  },
  [CARDS.CLUBS_3]: {
    id: CARDS.CLUBS_3,
    img: `${config.host}:${config.port}/images/cards/3_of_clubs.svg`,
  },
  [CARDS.CLUBS_4]: {
    id: CARDS.CLUBS_4,
    img: `${config.host}:${config.port}/images/cards/4_of_clubs.svg`,
  },
  [CARDS.CLUBS_5]: {
    id: CARDS.CLUBS_5,
    img: `${config.host}:${config.port}/images/cards/5_of_clubs.svg`,
  },
  [CARDS.CLUBS_6]: {
    id: CARDS.CLUBS_6,
    img: `${config.host}:${config.port}/images/cards/6_of_clubs.svg`,
  },
  [CARDS.CLUBS_7]: {
    id: CARDS.CLUBS_7,
    img: `${config.host}:${config.port}/images/cards/7_of_clubs.svg`,
  },
  [CARDS.CLUBS_8]: {
    id: CARDS.CLUBS_8,
    img: `${config.host}:${config.port}/images/cards/8_of_clubs.svg`,
  },
  [CARDS.CLUBS_9]: {
    id: CARDS.CLUBS_9,
    img: `${config.host}:${config.port}/images/cards/9_of_clubs.svg`,
  },
  [CARDS.CLUBS_10]: {
    id: CARDS.CLUBS_10,
    img: `${config.host}:${config.port}/images/cards/10_of_clubs.svg`,
  },
  [CARDS.CLUBS_JACK]: {
    id: CARDS.CLUBS_JACK,
    img: `${config.host}:${config.port}/images/cards/jack_of_clubs.svg`,
  },
  [CARDS.CLUBS_QUEEN]: {
    id: CARDS.CLUBS_QUEEN,
    img: `${config.host}:${config.port}/images/cards/queen_of_clubs.svg`,
  },
  [CARDS.CLUBS_KING]: {
    id: CARDS.CLUBS_KING,
    img: `${config.host}:${config.port}/images/cards/king_of_clubs.svg`,
  },
  [CARDS.CLUBS_ACE]: {
    id: CARDS.CLUBS_ACE,
    img: `${config.host}:${config.port}/images/cards/ace_of_clubs.svg`,
  },
  [CARDS.DIAMONDS_2]: {
    id: CARDS.DIAMONDS_2,
    img: `${config.host}:${config.port}/images/cards/2_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_3]: {
    id: CARDS.DIAMONDS_3,
    img: `${config.host}:${config.port}/images/cards/3_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_4]: {
    id: CARDS.DIAMONDS_4,
    img: `${config.host}:${config.port}/images/cards/4_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_5]: {
    id: CARDS.DIAMONDS_5,
    img: `${config.host}:${config.port}/images/cards/5_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_6]: {
    id: CARDS.DIAMONDS_6,
    img: `${config.host}:${config.port}/images/cards/6_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_7]: {
    id: CARDS.DIAMONDS_7,
    img: `${config.host}:${config.port}/images/cards/7_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_8]: {
    id: CARDS.DIAMONDS_8,
    img: `${config.host}:${config.port}/images/cards/8_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_9]: {
    id: CARDS.DIAMONDS_9,
    img: `${config.host}:${config.port}/images/cards/9_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_10]: {
    id: CARDS.DIAMONDS_10,
    img: `${config.host}:${config.port}/images/cards/10_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_JACK]: {
    id: CARDS.DIAMONDS_JACK,
    img: `${config.host}:${config.port}/images/cards/jack_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_QUEEN]: {
    id: CARDS.DIAMONDS_QUEEN,
    img: `${config.host}:${config.port}/images/cards/queen_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_KING]: {
    id: CARDS.DIAMONDS_KING,
    img: `${config.host}:${config.port}/images/cards/king_of_diamonds.svg`,
  },
  [CARDS.DIAMONDS_ACE]: {
    id: CARDS.DIAMONDS_ACE,
    img: `${config.host}:${config.port}/images/cards/ace_of_diamonds.svg`,
  },
  [CARDS.HEARTS_2]: {
    id: CARDS.HEARTS_2,
    img: `${config.host}:${config.port}/images/cards/2_of_hearts.svg`,
  },
  [CARDS.HEARTS_3]: {
    id: CARDS.HEARTS_3,
    img: `${config.host}:${config.port}/images/cards/3_of_hearts.svg`,
  },
  [CARDS.HEARTS_4]: {
    id: CARDS.HEARTS_4,
    img: `${config.host}:${config.port}/images/cards/4_of_hearts.svg`,
  },
  [CARDS.HEARTS_5]: {
    id: CARDS.HEARTS_5,
    img: `${config.host}:${config.port}/images/cards/5_of_hearts.svg`,
  },
  [CARDS.HEARTS_6]: {
    id: CARDS.HEARTS_6,
    img: `${config.host}:${config.port}/images/cards/6_of_hearts.svg`,
  },
  [CARDS.HEARTS_7]: {
    id: CARDS.HEARTS_7,
    img: `${config.host}:${config.port}/images/cards/7_of_hearts.svg`,
  },
  [CARDS.HEARTS_8]: {
    id: CARDS.HEARTS_8,
    img: `${config.host}:${config.port}/images/cards/8_of_hearts.svg`,
  },
  [CARDS.HEARTS_9]: {
    id: CARDS.HEARTS_9,
    img: `${config.host}:${config.port}/images/cards/9_of_hearts.svg`,
  },
  [CARDS.HEARTS_10]: {
    id: CARDS.HEARTS_10,
    img: `${config.host}:${config.port}/images/cards/10_of_hearts.svg`,
  },
  [CARDS.HEARTS_JACK]: {
    id: CARDS.HEARTS_JACK,
    img: `${config.host}:${config.port}/images/cards/jack_of_hearts.svg`,
  },
  [CARDS.HEARTS_QUEEN]: {
    id: CARDS.HEARTS_QUEEN,
    img: `${config.host}:${config.port}/images/cards/queen_of_hearts.svg`,
  },
  [CARDS.HEARTS_KING]: {
    id: CARDS.HEARTS_KING,
    img: `${config.host}:${config.port}/images/cards/king_of_hearts.svg`,
  },
  [CARDS.HEARTS_ACE]: {
    id: CARDS.HEARTS_ACE,
    img: `${config.host}:${config.port}/images/cards/ace_of_hearts.svg`,
  },
  [CARDS.SPADES_2]: {
    id: CARDS.SPADES_2,
    img: `${config.host}:${config.port}/images/cards/2_of_hearts.svg`,
  },
  [CARDS.SPADES_3]: {
    id: CARDS.SPADES_3,
    img: `${config.host}:${config.port}/images/cards/3_of_hearts.svg`,
  },
  [CARDS.SPADES_4]: {
    id: CARDS.SPADES_4,
    img: `${config.host}:${config.port}/images/cards/4_of_hearts.svg`,
  },
  [CARDS.SPADES_5]: {
    id: CARDS.SPADES_5,
    img: `${config.host}:${config.port}/images/cards/5_of_hearts.svg`,
  },
  [CARDS.SPADES_6]: {
    id: CARDS.SPADES_6,
    img: `${config.host}:${config.port}/images/cards/6_of_hearts.svg`,
  },
  [CARDS.SPADES_7]: {
    id: CARDS.SPADES_7,
    img: `${config.host}:${config.port}/images/cards/7_of_hearts.svg`,
  },
  [CARDS.SPADES_8]: {
    id: CARDS.SPADES_8,
    img: `${config.host}:${config.port}/images/cards/8_of_hearts.svg`,
  },
  [CARDS.SPADES_9]: {
    id: CARDS.SPADES_9,
    img: `${config.host}:${config.port}/images/cards/9_of_hearts.svg`,
  },
  [CARDS.SPADES_10]: {
    id: CARDS.SPADES_10,
    img: `${config.host}:${config.port}/images/cards/10_of_hearts.svg`,
  },
  [CARDS.SPADES_JACK]: {
    id: CARDS.SPADES_JACK,
    img: `${config.host}:${config.port}/images/cards/jack_of_hearts.svg`,
  },
  [CARDS.SPADES_QUEEN]: {
    id: CARDS.SPADES_QUEEN,
    img: `${config.host}:${config.port}/images/cards/queen_of_hearts.svg`,
  },
  [CARDS.SPADES_KING]: {
    id: CARDS.SPADES_KING,
    img: `${config.host}:${config.port}/images/cards/king_of_hearts.svg`,
  },
  [CARDS.SPADES_ACE]: {
    id: CARDS.SPADES_ACE,
    img: `${config.host}:${config.port}/images/cards/ace_of_hearts.svg`,
  },
  [CARDS.BACK]: {
    id: CARDS.BACK,
    img: `${config.host}:${config.port}/images/cards/card_back.svg`,
  },
};

module.exports = cards_map;
