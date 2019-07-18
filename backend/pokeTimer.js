//const Pokemon = require("./pokemon");

const UNIT = 1000;
const SECONDS = 10;
const TIME = UNIT * SECONDS;

class PokeTimer {
  constructor() {
    //this.pokemon = null;
    this.expiration = this.calculateExpiration();
  }

  calculateExpiration() {
    return new Date(Date.now() + TIME);
  }
}

// console.log("trenutni datum", new Date(Date.now() + TIME));

// console.log(
//   "broj s-a",
//   (new Date(Date.now() + TIME) - new Date(Date.now())) / UNIT
// );

module.exports = PokeTimer;
