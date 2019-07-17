const pokemonList = require("./pokemon.json");

const Pokedex = pokemonList.PokemonList;

const randomPokemon = {
  get pokemon() {
    const Pokemon = Pokedex[Math.floor(Math.random() * Pokedex.length)];
    return Pokemon;
  },
  get birthdate() {
    return new Date();
  }
};

class Pokemon {
  constructor() {
    this.Pokemon = randomPokemon.pokemon;
    this.birthdate = randomPokemon.birthdate;
  }
}

module.exports = Pokemon;
