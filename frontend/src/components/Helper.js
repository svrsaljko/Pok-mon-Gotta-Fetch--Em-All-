export const NEW_POKEMON_URL = "http://localhost:8000/pokemon/new";
export const TIMER_URL = "http://localhost:8000/pokemon/timer";
export const SECOND = 1000;
export const get3D = num => {
  if (num.toString().length == 1) {
    return "00" + num;
  } else if (num.toString().length == 2) {
    return "0" + num;
  } else return "???";
};
