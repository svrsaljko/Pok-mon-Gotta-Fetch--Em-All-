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

  componentDidMount() {}

  get3D = num => {
    if (num.toString().length == 1) {
      return "00" + num;
    } else if (num.toString().length == 2) {
      return "0" + num;
    } else return "000";
  };

  newPokemonOnClick = () => {
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
    //    console.log("NEW POKEMON");
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
          <div className="UserContainer">
            <div>
              Welcome <button className="UserButton">USER</button>
            </div>
            <div>COINS: 100</div>
            <button className="CollectCoins">COLLECT</button>
          </div>
          <div className="PokemonData" onClick={this.newPokemonOnClick}>
            <PokemonImage pokemonName={this.state.pokemon.pokemonName} />
            <div>#{this.get3D(this.state.pokemonId)}</div>
            <div>{this.state.pokemon.pokemonName}</div>
            <div> {pokemonType} </div>
            <div className="PokemonDescription">
              <p>{"\n"}</p>
              {this.state.pokemonDescription}
            </div>
          </div>
          <div className="TimerContainer">
            Time to new pokemon:
            <div> 1:00</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
