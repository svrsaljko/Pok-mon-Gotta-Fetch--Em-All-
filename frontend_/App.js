import React, { Component } from "react";
import Header from "./src/components/Header";
import "./App.css";
import Squirtle from "./src/pokemonImages/Squirtle.png";
import PokemonImage from "./src/components/PokemonImage";
const NEW_POKEMON_URL = "http://localhost:8000/pokemon/new";

export class App extends Component {
  state = {
    pokemon: "",
    birthdate: null
  };

  componentDidMount() {
    fetch(NEW_POKEMON_URL).then(res => {
      res.json().then(res => {
        this.setState({
          pokemon: res.pokemon.Pokemon,
          birthdate: res.pokemon.birthdate
        });
      });
    });
  }

  render() {
    //console.log(this.state.pokemon.pokemonId);
    return (
      <div className="SiteContainer">
        <Header />
        <div className="PokemonContainer">
          <div className="PokemonData">
            <PokemonImage pokemonName={this.state.pokemon.pokemonName} />
            {/* <img
              className="PokemonImage"
              src={
                "./src/pokemonImages/" + this.state.pokemon.pokemonId + ".png"
              }
              //src={"./src/pokemonImages/1.png"}
              //src={Bulbasaur}
              src={Squirtle}
              alt=""
            /> */}
            <div>PokemonId:{this.state.pokemon.pokemonId}</div>
            <div>PokemonName:{this.state.pokemon.pokemonName}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
