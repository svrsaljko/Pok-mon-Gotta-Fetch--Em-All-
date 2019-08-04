export const NEW_POKEMON_URL = "http://localhost:8000/pokemon/new";
export const TIMER_URL = "http://localhost:8000/pokemon/timer";
export const REGISTER_URL = "http://localhost:8000/register";
export const LOGIN_URL = "http://localhost:8000/login";
export const SECOND = 1000;
export const get3D = num => {
  if (num.toString().length == 1) {
    return "00" + num;
  } else if (num.toString().length == 2) {
    return "0" + num;
  } else return "???";
};

export const getLogInOptions = (usernameMail, password) => {
  return {
    method: "POST",
    body: JSON.stringify({ usernameMail, password }),
    headers: {
      "Content-Type": "application/json"
    }
  };
};
export const getRegisterOptions = (username, email, password) => {
  return {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json"
    }
  };
};
