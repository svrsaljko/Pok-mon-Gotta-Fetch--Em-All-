const connection = require("../../database/index.js");

class Registration {
  static usernameExist(username) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT username FROM `user` WHERE username=(?);",
        username,
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

  static register(username, password) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO `user` (username,password) VALUES (" +
          connection.escape(username) +
          ", " +
          connection.escape(password) +
          ")",
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

module.exports = Registration;
