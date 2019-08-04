import React from "react";
import { Link } from "react-router-dom";
import EmailValidator from "email-validator";
import sha256 from "sha256";
import { register, logIn } from "../components/AuthService";

export default class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    disableRPField: true,
    retypedPassword: "",
    message: "Enter your information in input fields."
  };

  onUsernameSubmmit = e => {
    e.preventDefault();
    let username = this.state.username.trim();
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    password = sha256(password);
    if (!this.usernameLengthChecker()) {
      this.setState({ message: "Username too short !" });
    } else if (!EmailValidator.validate(email)) {
      this.setState({
        message: "Please enter a valid email address according to format !"
      });
    } else if (!this.passwordsChecker()) {
      this.setState({
        message: "Passwords aren't matched!"
      });
    } else if (
      this.usernameLengthChecker &&
      EmailValidator.validate(email) &&
      this.passwordsChecker()
    ) {
      register(username, email, password)
        .then(res => {
          if (!res) {
            this.setState({ message: "Username or email already exist!" });
          } else {
            logIn(email, password, this.props.history);
          }
        })
        .catch(error => console.error(error));
    }
  };

  usernameLengthChecker() {
    if (this.state.username.length >= 5 && this.state.username.length <= 20) {
      return true;
    } else {
      return false;
    }
  }

  passwordsChecker() {
    if (this.state.retypedPassword === this.state.password) {
      return true;
    } else {
      return false;
    }
  }

  onUsernameInput = e => {
    let username = e.target.value;
    this.setState({
      username,
      message: "Username need to have at least 5 characters, 20 is max !"
    });
  };
  onPasswordInput = e => {
    let password = e.target.value;
    if (this.state.password.length >= 4 && this.state.password.length <= 20) {
      this.setState({ disableRPField: false, password });
    }
    this.setState({
      password,
      message: "Password need to have at least 5 characters, 20 is max !"
    });
  };
  onRetypePasswordInput = e => {
    let retypedPassword = e.target.value;
    this.setState({
      retypedPassword,
      message: "Retype your password, for successfull registration!"
    });
  };

  onEmailInput = e => {
    let email = e.target.value;
    this.setState({ email, message: "Mail format: mail@example.com !" });
  };

  render() {
    return (
      <div className="LoginPage">
        <p style={{ minHeight: "20px", fontSize: "1rem" }}>
          {this.state.message}
        </p>
        <form action="" onSubmit={this.onUsernameSubmmit}>
          <p>Username:</p>
          <input
            onChange={this.onUsernameInput}
            placeholder="Username here..."
            type="text"
          />
          <p>Mail:</p>
          <input
            onChange={this.onEmailInput}
            placeholder="E-mail here..."
            type="mail"
          />
          <p>Password:</p>
          <input
            onChange={this.onPasswordInput}
            placeholder="Password here..."
            type="password"
          />
          <p>Retype password:</p>
          <input
            onChange={this.onRetypePasswordInput}
            placeholder="Retype password here..."
            type="password"
            disabled={this.state.disableRPField}
          />
        </form>
        <button
          onClick={this.onUsernameSubmmit}
          className="RegisterLoginButton"
        >
          REGISTER
        </button>
        <Link className="LinkLogInRegister" to="/">
          Already have an account!?
        </Link>
      </div>
    );
  }
}
