const express = require("express");
const cors = require("cors");

const Pokemon = require("./Pokemon.js");
const Timer = require("./timer.js");
const User = require("./user.js");

const PORT = 8000;
const app = express();

// const ti = new PokeTimer();
// console.log("a", ti);

// const poke1 = new Pokemon();

// console.log("poke1", poke1.Pokemon.pokemonName);
// console.log("poke1 full", poke1);

app.use(cors({ origin: "http://localhost:1234" }));

app.get("/pokemon/timer", (req, res) => {
  const timer = new Timer(1000);

  res.json({ timer });
});

app.get("/user", (req, res) => {
  const user = new User();

  res.json({ user });
});

app.get("/coinsTimer", (req, res) => {
  const timer = new Timer(4000);

  res.json({ timer });
});

app.get("/pokemon/new", (req, res) => {
  const pokemon = new Pokemon();
  res.json({ pokemon });
});

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
