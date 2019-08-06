const app = require("../bin/server.js");
const Pokemon = require("./pokemon.js");
const Timer = require("./timer.js");
const userRegistrationRouter = require("../api/userRegistration.js");
const userLogInRouter = require("../api/userLogIn.js");

app.use(userRegistrationRouter);
app.use(userLogInRouter);

app.get("/pokemon/timer", (req, res) => {
  const timer = new Timer(5000);

  res.json({ timer: timer.expiration });
});

app.get("/pokemon/new", (req, res) => {
  const pokemon = new Pokemon();
  res.json({ pokemon });
});
