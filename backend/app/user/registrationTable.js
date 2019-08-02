const connection = require("../../database/index.js");

class Registration {
  static register(username, mail, password) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO `user` (username,mail,password) VALUES (" +
          connection.escape(username) +
          ", " +
          connection.escape(mail) +
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
