import { ENABLE_NEW_POKEMON, SET_POKEMON_STATE } from "../actions/types.js";

const initState = {
  pokemonName: "\n",
  pokemonId: "#???",
  pokemonType: "\n",
  pokemonDescription: "\n",
  enableNewPokemon: false
};

const pokemonReducer = (state = initState, action) => {
  if (action.type === ENABLE_NEW_POKEMON) {
    return {
      ...state,
      enableNewPokemon: true,
      pokemonName: "\n",
      pokemonType: "\n",
      pokemonDescription: "\n"
    };
  }
  if (action.type === SET_POKEMON_STATE) {
    let { pokemon } = action;
    return {
      ...state,
      pokemonName: pokemon.pokemonName,
      pokemonId: pokemon.pokemonId,
      pokemonType:
        pokemon.pokemonType.length > 1
          ? pokemon.pokemonType.join("  ")
          : pokemon.pokemonType,
      pokemonDescription: pokemon.description,
      enableNewPokemon: false
    };
  }
  return state;
};

export default pokemonReducer;
