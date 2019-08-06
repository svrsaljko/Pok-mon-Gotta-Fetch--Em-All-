const connection = require("../../database/index.js");

class CheckUserTimer {
  static checkTimer(userId) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT pokemonTimer FROM `timer` WHERE userId=" +
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

module.exports = CheckUserTimer;
