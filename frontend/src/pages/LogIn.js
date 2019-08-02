import React from "react";
import { Link } from "react-router-dom";
import EmailValidator from "email-validator";
const LOGIN_URL = "http://localhost:8000/login";

export default class Login extends React.Component {
  state = {
    usernameMail: "",
    password: ""
  };

  onUsernameSubmmit = e => {
    e.preventDefault();
    let usernameMail = this.state.usernameMail.trim();
    let password = this.state.password.trim();
    let flag = this.usernameOrMailCheck(usernameMail);
    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ usernameMail, password, flag }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("ima ga:", res.status);
      })
      .catch(error => console.error("Error:", error));
  };

  usernameOrMailCheck = usernameMail => {
    if (EmailValidator.validate(usernameMail)) {
      console.log("it's email!");
      return true;
    } else {
      console.log("username");
      return false;
    }
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
        <p style={{ minHeight: "20px" }}>{"\n"}</p>
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
