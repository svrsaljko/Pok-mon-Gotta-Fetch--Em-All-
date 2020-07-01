const pokemonList = require('../data/pokemon.json');
const Pokedex = pokemonList.PokemonList;

const randomPokemon = {
  get pokemon() {
    // const Pokemon = Pokedex[Math.floor(Math.random() * Pokedex.length)];
    const Pokemon = Pokedex[9];
    return Pokemon;
  },
  get birthdate() {
    return new Date();
  },
};

class Pokemon {
  constructor() {
    this.Pokemon = randomPokemon.pokemon;
    this.birthdate = randomPokemon.birthdate;
  }
}

module.exports = Pokemon;
