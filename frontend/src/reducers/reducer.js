import {
  seconds,
  minutes,
  hours,
  days
} from "../components/timer/CalculateTime.js";

import {
  SET_TIMER_STATE,
  ENABLE_NEW_POKEMON,
  SET_POKEMON_STATE
} from "../actions/types.js";

const initState = {
  pokemonName: "\n",
  pokemonId: "#???",
  pokemonType: "\n",
  pokemonDescription: "\n",
  enableNewPokemon: false,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};

const reducer = (state = initState, action) => {
  if (action.type === SET_TIMER_STATE) {
    let { distance } = action;
    return {
      ...state,
      days: days(distance),
      hours: hours(distance),
      minutes: minutes(distance),
      seconds: seconds(distance)
    };
  }
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
    console.log("pokemon", pokemon);
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

export default reducer;
