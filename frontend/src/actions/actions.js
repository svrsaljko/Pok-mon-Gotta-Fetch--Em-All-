import {
  SET_TIMER_STATE,
  ENABLE_NEW_POKEMON,
  SET_POKEMON_STATE
} from "../actions/types";

export const setTimerState = distance => {
  return { type: SET_TIMER_STATE, distance };
};
export const enableNewPokemon = () => {
  return { type: ENABLE_NEW_POKEMON };
};
export const setPokemonState = pokemon => {
  return { type: SET_POKEMON_STATE, pokemon };
};
