import React, { Component } from "react";
import Header from "./src/components/Header";
import PokemonImage from "./src/components/PokemonImage";
import "./App.css";

const NEW_POKEMON_URL = "http://localhost:8000/pokemon/new";

export class App extends Component {
  state = {
    pokemon: "",
    birthdate: null,
    pokemonId: "0",
    pokemonType: "",
    pokemonDescription: ""
  };

  componentDidMount() {
    fetch(NEW_POKEMON_URL).then(res => {
      res.json().then(res => {
        console.log("pokemon", res.pokemon.Pokemon.description);
        this.setState({
          pokemon: res.pokemon.Pokemon,
          pokemonId: res.pokemon.Pokemon.pokemonId,
          birthdate: res.pokemon.birthdate,
          pokemonType: res.pokemon.Pokemon.pokemonType,
          pokemonDescription: res.pokemon.Pokemon.description
        });
      });
    });
  }
  get3D = num => {
    return (num.toString().length < 3 ? "00" + num : num).toString();
  };

  render() {
    console.log("opis: ", this.state.pokemonDescription);
    let { pokemonType } = this.state;
    if (pokemonType.length > 1) {
      pokemonType = pokemonType.join("  ");
    }
    return (
      <div className="SiteContainer">
        <Header />
        <div className="PokemonContainer">
          <div className="PokemonData">
            <PokemonImage pokemonName={this.state.pokemon.pokemonName} />
            <div>#{this.get3D(this.state.pokemonId)}</div>
            <div>{this.state.pokemon.pokemonName}</div>
            <div> {pokemonType} </div>
            <div className="PokemonDescription">
              <p>{"\n"}</p>
              {this.state.pokemonDescription}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
