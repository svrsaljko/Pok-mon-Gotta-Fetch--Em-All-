import React, { Component } from "react";
import Header from "./src/components/Header";
import PokemonImage from "./src/components/PokemonImage";
import "./App.css";

const NEW_POKEMON_URL = "http://localhost:8000/pokemon/new";
const TIMER_URL = "http://localhost:8000/pokemon/timer";

export class App extends Component {
  state = {
    pokemon: "",
    birthdate: null,
    pokemonId: "0",
    pokemonType: "",
    pokemonDescription: "",
    timer: 1,
    countdown: 1,
    expiration: null,
    enableNewPokemon: true
  };

  componentDidMount() {
    this.pokeTimerCall();
  }

  get3D = num => {
    if (num.toString().length == 1) {
      return "00" + num;
    } else if (num.toString().length == 2) {
      return "0" + num;
    } else return "000";
  };

  pokeTimerCall = () => {
    fetch(TIMER_URL).then(res => {
      res.json().then(res => {
        expiration = res.timer.expiration;
        let { expiration } = res.timer;
        console.log(
          "CALL: poketimer expiration",
          new Date(expiration).getTime() - new Date().getTime()
        );

        let timer = setInterval(() => {
          let now = new Date().getTime();
          let countdown = new Date(expiration).getTime();
          let distance = countdown - now;
          this.setState({ timer: distance });
          if (distance < 0) {
            this.setState({ timer: 0, enableNewPokemon: true });
            clearInterval(timer);
          }
        }, 1000);
      });
    });
  };

  newPokemonOnClick = () => {
    fetch(NEW_POKEMON_URL).then(res => {
      res.json().then(res => {
        console.log("ima li te", res.pokemon.expiration);
        this.setState({
          pokemon: res.pokemon.Pokemon,
          pokemonId: res.pokemon.Pokemon.pokemonId,
          birthdate: res.pokemon.birthdate,
          pokemonType: res.pokemon.Pokemon.pokemonType,
          pokemonDescription: res.pokemon.Pokemon.description,
          expiration: res.pokemon.expiration,
          enableNewPokemon: false
        });
        this.pokeTimerCall();
      });
    });
  };

  render() {
    console.log("odbrojavanje", this.state.timer);
    let { pokemonType, timer } = this.state;
    let days = Math.floor(timer / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timer % (1000 * 60)) / 1000);
    console.log("enable: ", this.state.enableNewPokemon);

    if (pokemonType.length > 1) {
      pokemonType = pokemonType.join("  ");
    }

    let pokeData = () => {
      let data = this.state.enableNewPokemon ? (
        <div> #??? </div>
      ) : (
        <div>
          <div>#{this.get3D(this.state.pokemonId)}</div>
          <div>{this.state.pokemon.pokemonName}</div>
          <div> {pokemonType} </div>
          <div className="PokemonDescription">
            <p>{"\n"}</p>
            {this.state.pokemonDescription}
          </div>
        </div>
      );
      return data;
    };

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
            <PokemonImage
              enableNewPokemon={this.state.enableNewPokemon}
              pokemonName={this.state.pokemon.pokemonName}
            />
            {pokeData()}
          </div>
          <div className="TimerContainer">
            Time to new pokemon:
            <div>
              {days + "d " + hours + "h " + minutes + "m " + seconds + "s "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
