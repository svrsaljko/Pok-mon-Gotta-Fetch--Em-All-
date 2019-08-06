const connection = require("../../database/index.js");

class UpdateUserTimer {
  static updateTimer(userId, pokemonTimer) {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE `timer` SET pokemonTimer=" +
          connection.escape(pokemonTimer) +
          "WHERE userId =" +
          connection.escape(userId) +
          ";",
        function(err, res) {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  }
}

module.exports = UpdateUserTimer;
