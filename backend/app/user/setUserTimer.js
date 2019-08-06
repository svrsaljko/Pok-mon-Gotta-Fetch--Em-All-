const connection = require("../../database/index.js");

class SetUserTimer {
  static setTimer(userId, pokemonTimer) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO `timer` (userId,pokemonTimer) VALUES (" +
          connection.escape(userId) +
          "," +
          connection.escape(pokemonTimer) +
          ")",
        function(err, res) {
          if (err) {
            reject(err);
          } else {
          }
          resolve(res);
        }
      );
    });
  }
}

module.exports = SetUserTimer;
