import React from "react";

export default class Login extends React.Component {
  state = {
    username: ""
  };

  onUsernameSubmmit = e => {
    e.preventDefault();
    console.log("form submmited");
  };

  onUsernameInput = e => {
    let username = e.target.value;
    this.setState({ username });
  };

  render() {
    console.log("current username: ", this.state.username);
    return (
      <div className="LoginPage">
        <form action="" onSubmit={this.onUsernameSubmmit}>
          <p>Username:</p>
          <input
            onChange={this.onUsernameInput}
            placeholder="Username here..."
            type="text"
          />
        </form>
      </div>
    );
  }
}
