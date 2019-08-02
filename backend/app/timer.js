const UNIT = 1000;
const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;
//TIME FOR TESTING
//const TIME = 2 * UNIT * SECONDS * MINUTES * HOURS;
//const TIME = (SECONDS * UNIT) / 12;
const TIME = 3000;

class Timer {
  constructor(TIME) {
    this.expiration = this.calculateExpiration(TIME);
    this.SECOND = UNIT;
  }

  calculateExpiration(TIME) {
    return new Date(Date.now() + TIME + 500);
  }
}

module.exports = Timer;
