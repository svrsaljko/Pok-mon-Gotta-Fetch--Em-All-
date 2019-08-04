import {
  seconds,
  minutes,
  hours,
  days
} from "../components/timer/CalculateTime.js";

import { SET_POKEMON_TIMER_STATE } from "../actions/types.js";

const initState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};

const timerReducer = (state = initState, action) => {
  if (action.type === SET_POKEMON_TIMER_STATE) {
    let { distance } = action;
    return {
      ...state,
      days: days(distance),
      hours: hours(distance),
      minutes: minutes(distance),
      seconds: seconds(distance)
    };
  }

  return state;
};

export default timerReducer;
