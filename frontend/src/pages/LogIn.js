import React from "react";
import { Link } from "react-router-dom";
const LOGIN_URL = "http://localhost:8000/login";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onUsernameSubmmit = e => {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    //console.log("form submmited");
    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => console.log(res))
      .catch(error => console.error("Error:", error));
  };

  onUsernameInput = e => {
    let username = e.target.value;
    this.setState({ username });
  };
  onPasswordInput = e => {
    let password = e.target.value;
    this.setState({ password });
  };

  render() {
    return (
      <div className="LoginPage">
        <form action="" onSubmit={this.onUsernameSubmmit}>
          <p>Username:</p>
          <input
            onChange={this.onUsernameInput}
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
        <Link to="/register">Already have an account!?</Link>
      </div>
    );
  }
}
