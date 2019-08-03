import decode from "jwt-decode";

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
  console.log("username iz storage-a", username);
  console.log("username iz token-a", _username);
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
