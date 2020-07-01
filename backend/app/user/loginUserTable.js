const connection = require('../../database/index.js');

class LogIn {
  static login(user, password) {
    console.log('password in...', password);
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id,username,password FROM users  WHERE (username= ' +
          connection.escape(user) +
          'OR mail=' +
          connection.escape(user) +
          ') AND password=' +
          connection.escape(password),
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

module.exports = LogIn;
