import React from "react";
import { Link } from "react-router-dom";
import EmailValidator from "email-validator";
import sha256 from "sha256";
import decode from "jwt-decode";

const LOGIN_URL = "http://localhost:8000/login";

export default class Login extends React.Component {
  state = {
    usernameMail: "",
    password: "",
    message: ""
  };

  // componentDidMount() {
  //   if (localStorage.length > 0) {
  //     this.props.history.push("/");
  //   }
  // }

  setTokenToLocalStorage = token => {
    // Saves user token to localStorage
    localStorage.setItem("token", token);
  };

  redirectToUser = () => {
    this.props.history.push("/");
  };

  onUsernameSubmmit = e => {
    e.preventDefault();
    let usernameMail = this.state.usernameMail.trim();
    let password = this.state.password.trim();
    password = sha256(password);
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
        this.setState({ message: res.message });
        let { token } = res;
        //console.log("dekodirani token:", decode(token));
        let decodedToken = decode(token);
        console.log("deko", decodedToken);
        this.setTokenToLocalStorage(token);
        if (localStorage.length > 0) {
          this.props.history.push("/");
        }
        console.log("token:", token);
        console.log("token length:", token.length);
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
