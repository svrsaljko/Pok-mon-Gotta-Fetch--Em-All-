const { Router } = require("express");
const Registration = require("../app/user/registrationTable.js");

const router = new Router();

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  Registration.usernameExist(username)
    .then(res => {
      console.log("POST /register res", res);
      console.log("length: ", res.length);
      if (res.length == 0) {
        console.log("let's create new user");
        Registration.register(username, password)
          .then(res => {
            console.log("resgistration complete response: ", res);
          })
          .catch(error => console.error(error));
      } else {
        console.log("User already exist");
      }
    })
    .catch(error => console.error(error));
});

module.exports = router;
