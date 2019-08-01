import React from "react";
import PokedexHover from "../pokemonImages/PokedexHover.png";
import Pokedex from "../pokemonImages/Pokedex.png";

class UserProfile extends React.Component {
  state = {
    img: Pokedex
  };

  componentDidMount() {
    console.log("state: ", this.state.img);
  }

  render() {
    return (
      <div>
        WELCOME USER
        <img
          style={{ color: "blue", width: "50px", height: "50px" }}
          src={this.state.img}
          alt=""
          onMouseEnter={() => {
            this.setState({ img: PokedexHover });
          }}
          onMouseOut={() => {
            this.setState({ img: Pokedex });
          }}
        />
      </div>
    );
  }
}

export default UserProfile;
