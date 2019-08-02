const app = require("../bin/server.js");
const Pokemon = require("./pokemon.js");
const Timer = require("./timer.js");
const CheckUser = require("../app/user/checkUserTable.js");
const userRegistrationRouter = require("../api/userRegistration.js");

app.use(userRegistrationRouter);

app.post("/login", (req, res) => {
  const { usernameMail, password, flag } = req.body;
  console.log("username:", usernameMail);
  if (flag) {
    //mail = usernameMail;
    CheckUser.mailExist(usernameMail)
      .then(resp => {
        if (resp.length === 0) {
          res.json({ status: false });
          //console.log("nema ga");
        } else {
          res.json({ status: true });
          //console.log("ima ga");
        }
      })
      .catch(error => console.error(error));
  } else {
    CheckUser.usernameExist(usernameMail)
      .then(resp => {
        if (resp.length === 0) {
          res.json({ status: false });
          //console.log("nema ga");
        } else {
          res.json({ status: true });
          //console.log("ima ga");
        }
      })
      .catch(error => console.error(error));
  }
  //console.log("password:", password);
});

app.get("/pokemon/timer", (req, res) => {
  const timer = new Timer(1000);

  res.json({ timer });
});

app.get("/pokemon/new", (req, res) => {
  const pokemon = new Pokemon();
  res.json({ pokemon });
});
