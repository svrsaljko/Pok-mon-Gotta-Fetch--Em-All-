const express = require("express");
const Pokemon = require("./Pokemon.js");

const PORT = 8000;
const app = express();

const poke1 = new Pokemon();

console.log("poke1", poke1.Pokemon.pokemonName);
console.log("poke1 full", poke1);

app.get("/pokemon/new", (req, res) => {
  const pokemon = new Pokemon();
  res.json({ pokemon });
});

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
