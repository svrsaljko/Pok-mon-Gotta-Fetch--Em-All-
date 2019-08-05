import React from "react";
import PokedexHover from "../pokemonImages/PokedexHover.png";
import LogOutHover from "../pokemonImages/LogOutHover.png";
import ShopHover from "../pokemonImages/ShopHover.png";
import HomeHover from "../pokemonImages/HomeHover.png";
import UserHover from "../pokemonImages/UserHover.png";
import Pokedex from "../pokemonImages/Pokedex1.png";
import LogOut from "../pokemonImages/LogOut1.png";
import Shop from "../pokemonImages/Shop1.png";
import Home from "../pokemonImages/Home1.png";
import User from "../pokemonImages/User.png";
import { NavLink, withRouter } from "react-router-dom";
import { logOut } from "../components/AuthService";

class NavBar extends React.Component {
  state = {
    pokedexImg: Pokedex,
    userImg: User,
    homeImg: Home,
    shopImg: Shop,
    logOutImg: LogOut
  };

  checkPath = linkToPath => {
    this.changeActiveComponentState();
    let { pathname } = this.props.location;
    if (linkToPath === pathname) {
      return true;
    } else {
      return false;
    }
  };

  changeActiveComponentState = () => {
    let { pathname } = this.props.location;
    // switch (pathname) {
    //   case "user/stipe":
    //     this.setState({ homeImg: HomeHover });
    //   case "data":
    //     this.setState({ userImg: UserHover });
    // }
  };

  componentDidMount() {
    console.log("CMD");
    if (this.checkPath("/user/stipe")) {
      this.setState({ homeImg: HomeHover });
    } else {
      this.setState({ homeImg: Home });
    }
    if (this.checkPath("/data")) {
      this.setState({ userImg: UserHover });
    } else {
      this.setState({ userImg: User });
    }
  }

  render() {
    return (
      <div className="NavBar">
        <NavLink
          className="NavLink"
          activeStyle={{
            borderBottom: "2px solid #00d8ff"
          }}
          to="/user/stipe"
        >
          <img
            className="NavIconImg"
            src={this.state.homeImg}
            alt=""
            onMouseEnter={() => {
              this.setState({ homeImg: HomeHover });
            }}
            onMouseOut={() => {
              if (this.checkPath("user/stipe")) {
                this.setState({ homeImg: Home });
              }
            }}
          />
        </NavLink>
        <NavLink
          className="NavLink"
          to="/data"
          activeStyle={{
            borderBottom: "2px solid #00d8ff"
          }}
        >
          <img
            className="NavIconImg"
            src={this.state.userImg}
            alt=""
            onMouseEnter={() => {
              this.setState({ userImg: UserHover });
            }}
            onMouseOut={() => {
              if (this.checkPath("/data")) {
                this.setState({ userImg: UserHover });
              }
            }}
          />
        </NavLink>

        <NavLink
          className="NavLink"
          to="/pokedex"
          activeStyle={{
            borderBottom: "2px solid #00d8ff"
          }}
        >
          <img
            className="NavIconImg"
            src={this.state.pokedexImg}
            alt=""
            onMouseEnter={() => {
              this.setState({ pokedexImg: PokedexHover });
            }}
            onMouseOut={() => {
              this.setState({ pokedexImg: Pokedex });
            }}
          />
        </NavLink>

        <NavLink
          to="/shop"
          activeStyle={{
            borderBottom: "2px solid #00d8ff"
          }}
          className="NavLink"
        >
          <img
            className="NavIconImg"
            src={this.state.shopImg}
            alt=""
            onMouseEnter={() => {
              this.setState({ shopImg: ShopHover });
            }}
            onMouseOut={() => {
              this.setState({ shopImg: Shop });
            }}
          />
        </NavLink>
        <div
          className="NavLink"
          onClick={() => {
            logOut(this.props.history);
          }}
        >
          <img
            className="NavIconImg"
            src={this.state.logOutImg}
            alt=""
            onMouseEnter={() => {
              this.setState({ logOutImg: LogOutHover });
            }}
            onMouseOut={() => {
              this.setState({ logOutImg: LogOut });
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
