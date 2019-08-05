import React from "react";
import NavBar from "../components/NavBar";
import { isLoggedIn } from "../components/AuthService";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    let { headerFlag } = this.props.state.pokemonReducer;
    return (
      <div
        className="Header"
        style={{
          justifyContent: headerFlag ? "space-between" : "center"
        }}
      >
        <p
          style={{ marginLeft: headerFlag ? "6rem" : "0rem" }}
          className="Title"
        >
          Gotta fetch 'em all
        </p>
        {headerFlag ? <NavBar /> : <div />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Header);
