import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import pokemonTimerReducer from "./pokemonTimerReducer";

export default combineReducers({ pokemonReducer, pokemonTimerReducer });
