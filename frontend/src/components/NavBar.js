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
import { logOut, getUsername } from "../components/AuthService";

class NavBar extends React.Component {
  state = {
    pokedexImg: Pokedex,
    userImg: User,
    homeImg: Home,
    shopImg: Shop,
    logOutImg: LogOut,
    onHomeFlag: false,
    onUserFlag: false,
    onPokedexFlag: false,
    onShopFlag: false
  };

  checkPath = linkToPath => {
    //this.changeActiveComponentState();
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

  checkActiveLink = () => {
    if (this.checkPath("/home/stipe")) {
      this.setState({ homeImg: HomeHover, onHomeFlag: true });
    } else {
      this.setState({ homeImg: Home, onHomeFlag: false });
    }
    if (this.checkPath("/data")) {
      this.setState({ userImg: UserHover });
    } else {
      this.setState({ userImg: User });
    }
  };

  componentDidMount() {
    console.log("CMD");
  }

  render() {
    return (
      <div className="NavBar">
        <NavLink
          className="NavLink"
          activeStyle={{
            borderBottom: "2px solid #00d8ff"
          }}
          to={`/home/${getUsername()}`}
          onClick={this.checkActiveLink}
        >
          <img
            className="NavIconImg"
            src={this.state.homeImg}
            alt=""
            onMouseEnter={() => {
              this.setState({ homeImg: HomeHover });
            }}
            onMouseOut={() => {
              if (this.state.onHomeFlag === false)
                this.setState({ homeImg: Home });
            }}
          />
        </NavLink>
        <NavLink
          className="NavLink"
          to={`/user/${getUsername()}`}
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
              this.setState({ userImg: User });
            }}
          />
        </NavLink>

        <NavLink
          className="NavLink"
          to={`/pokedex/${getUsername()}`}
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
          to={`/shop/${getUsername()}`}
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
