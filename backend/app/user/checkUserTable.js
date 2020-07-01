const connection = require('../../database/index.js');

class CheckUser {
  static usernameExist(username) {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT username FROM `users` WHERE username=(?);',
        username,
        function (err, res) {
          if (err) {
            reject(err);
          } else {
          }
          resolve(res);
        }
      );
    });
  }

  static mailExist(mail) {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT mail FROM `users` WHERE mail=(?);',
        mail,
        function (err, res) {
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

module.exports = CheckUser;
