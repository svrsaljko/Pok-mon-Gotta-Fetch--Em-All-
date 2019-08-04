import React from "react";
import sha256 from "sha256";
import { Link } from "react-router-dom";
import { logIn } from "../components/AuthService";

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
    logIn(usernameMail, password, this.props.history)
      .then(res => {
        if (!res) {
          this.setState({ message: "Incorrect username/mail or password" });
        }
      })
      .catch(err => console.error(err));
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
            placeholder="Username or mail here..."
            type="text"
          />
          <p>Password:</p>
          <input
            onChange={this.onPasswordInput}
            placeholder="Password here..."
            type="text"
          />
        </form>
        <button
          onClick={this.onUsernameSubmmit}
          className="RegisterLogInButton"
        >
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
