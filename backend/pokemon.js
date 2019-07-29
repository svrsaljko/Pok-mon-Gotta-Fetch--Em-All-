const pokemonList = require("./pokemon.json");
const Timer = require("./timer");
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
    this.expiration = this.returnExpiration();
  }

  returnExpiration() {
    const timer = new Timer(3000);
    return Timer.expiration;
  }
}

module.exports = Pokemon;
