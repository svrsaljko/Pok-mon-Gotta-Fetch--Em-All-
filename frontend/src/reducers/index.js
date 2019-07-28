import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import timerReducer from "./timerReducer";

export default combineReducers({ pokemonReducer, timerReducer });
