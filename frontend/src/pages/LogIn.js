import React from "react";
import { Link } from "react-router-dom";
import sha256 from "sha256";
import {
  setTokenToLocalStorage,
  getUsernameFromToken,
  isUserAuthenticated
} from "../components/AuthService";

const LOGIN_URL = "http://localhost:8000/login";

class LogIn extends React.Component {
  state = {
    usernameMail: "",
    password: "",
    message: ""
  };

  onUsernameSubmmit = e => {
    e.preventDefault();
    let usernameMail = this.state.usernameMail.trim();
    let password = sha256(this.state.password.trim());

    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ usernameMail, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ message: res.message });
        let { token } = res;
        let username = getUsernameFromToken(token);
        setTokenToLocalStorage(token, username);
        console.log("koji je return:", isUserAuthenticated());
        if (isUserAuthenticated()) {
          this.props.history.push(`/user/${username}`);
        }
      })
      .catch(error => console.error("Error:", error));
  };

  onUsernameMailInput = e => {
    let usernameMail = e.target.value;
    this.setState({ usernameMail });
  };
  onPasswordInput = e => {
    let password = e.target.value;
    this.setState({ password });
  };

  render() {
    return (
      <div className="LoginPage">
        <p style={{ minHeight: "20px" }}>{this.state.message}</p>
        <form action="" onSubmit={this.onUsernameSubmmit}>
          <p>Username/Mail:</p>
          <input
            onChange={this.onUsernameMailInput}
            placeholder="Username here..."
            type="text"
          />
          <p>Password:</p>
          <input
            onChange={this.onPasswordInput}
            placeholder="Password here..."
            type="text"
          />
        </form>
        <button onClick={this.onUsernameSubmmit} className="RegisterButton">
          LOG IN
        </button>
        <Link className="LinkLogInRegister" to="/register">
          Don't have an account yet!?
        </Link>
      </div>
    );
  }
}

export default LogIn;
