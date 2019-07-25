const pokemonList = require("./pokemon.json");
const PokeTimer = require("./pokeTimer");
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
    const pokeTimer = new PokeTimer();
    return pokeTimer.expiration;
  }
}

module.exports = Pokemon;
