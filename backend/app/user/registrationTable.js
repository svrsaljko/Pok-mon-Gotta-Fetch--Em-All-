const connection = require('../../database/index.js');
const setUserTimer = require('../user/setUserTimer');

class Registration {
  static register(username, mail, password) {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO `users` (username,mail,password) VALUES (' +
          connection.escape(username) +
          ', ' +
          connection.escape(mail) +
          ', ' +
          connection.escape(password) +
          ')',
        function (err, res) {
          if (err) {
            reject(err);
          }
          setUserTimer
            .setTimer(res.insertId, 'NO_TIMER')
            .then(resolve(res))
            .catch();
        }
      );
    });
  }
}

module.exports = Registration;
