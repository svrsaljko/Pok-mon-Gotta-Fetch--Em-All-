import decode from "jwt-decode";
import { LOGIN_URL, getLogInOptions } from "../components/Helper";

export const logIn = (usernameMail, password, history) => {
  return new Promise((resolve, reject) => {
    fetch(LOGIN_URL, getLogInOptions(usernameMail, password))
      .then(res => res.json())
      .then(res => {
        resolve(res.success);
        let { token } = res;
        logInWithToken(token, history);
      })
      .catch(error => reject(error));
  });
};

export const logInWithToken = (token, history) => {
  let username = getUsernameFromToken(token);
  setTokenToLocalStorage(token, username);
  if (isUserAuthenticated()) {
    history.push(`/user/${username}`);
  }
};

export const setTokenToLocalStorage = (token, username) => {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
};

export const logout = history => {
  localStorage.clear();
  history.push("/");
};

export const getUsername = () => {
  let username = localStorage.getItem("username", username);
  return username;
};

export const getUsernameFromToken = token => {
  let decodedToken = decode(token);
  let { username } = decodedToken;
  return username;
};

export const isUserAuthenticated = () => {
  let token = localStorage.getItem("token", token);
  let username = localStorage.getItem("username", username);
  let _username = getUsernameFromToken(token);
  if (username === _username) {
    return true;
  } else {
    return false;
  }
};

export const isLoggedIn = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

export const redirectToError = history => {
  history.push("/404");
};

export const pathLog = path => {
  console.log("path: ", path);
};
