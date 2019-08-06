const UpdateUserTimer = require("../user/UpdateUserTimer");
const MIN = 1 * 60 * 1000;

class CalculateTime {
  static sendTimeToDatabase(userId, pokemonTimer) {
    UpdateUserTimer.updateTimer(userId, pokemonTimer)
      .then(res => console.log("update return: ", res))
      .catch(err => console.error(err));
  }
}
//sendTimeToUser();
CalculateTime.sendTimeToDatabase(97, new Date(Date.now() + 15 * MIN));

module.exports = CalculateTime;
