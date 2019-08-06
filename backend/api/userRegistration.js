const { Router } = require("express");
const Registration = require("../app/user/registrationTable.js");
const CheckUser = require("../app/user/checkUserTable.js");
const router = new Router();

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  CheckUser.mailExist(email)
    .then(resp => {
      if (resp.length === 0) {
        CheckUser.usernameExist(username).then(resp => {
          if (resp.length === 0) {
            Registration.register(username, email, password)
              .then(resp => {
                res.json({ success: true });
              })
              .catch(error => console.error(error));
          } else {
            res.json({ success: false });
          }
        });
      } else {
        res.json({ success: false });
      }
    })

    .catch(error => console.error(error));
});

module.exports = router;
