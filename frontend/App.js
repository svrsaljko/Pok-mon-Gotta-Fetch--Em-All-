import React, { Component } from "react";
import Header from "./src/components/Header";
import PokemonImage from "./src/components/PokemonImage";
import "./App.css";

const NEW_POKEMON_URL = "http://localhost:8000/pokemon/new";
const TIMER_URL = "http://localhost:8000/pokemon/timer";
const SECOND = 1000;

export class App extends Component {
  state = {
    pokemon: "",
    pokemonName: "",
    birthdate: null,
    pokemonId: "???",
    pokemonType: "",
    pokemonDescription: "",
    timer: 1,
    countdown: 1,
    expiration: null,
    enableNewPokemon: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  enableNewPokemon = () => {
    return new Promise((resolve, reject) => {
      resolve(
        this.setState({
          enableNewPokemon: true
        })
      );
    });
  };

  initializeExpirationTime = () => {
    return fetch(TIMER_URL).then(res => {
      res.json().then(res => {
        //console.log("DID MOUNT RES", res.timer.expiration);
        let distance = new Date(res.timer.expiration).getTime();
        let now = new Date().getTime();
        distance = distance - now;
        console.log("CDM Miliseconds", distance);
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //console.log("CDM SECONDS", seconds);
        this.setState({
          expiration: res.timer.expiration,
          seconds,
          minutes,
          hours,
          days
        });
      });
    });
  };

  componentDidMount() {
    console.log("CDM CALL");
    this.initializeExpirationTime().then(this.pokeTimerCall());
  }

  get3D = num => {
    if (num.toString().length == 1) {
      return "00" + num;
    } else if (num.toString().length == 2) {
      return "0" + num;
    } else return "???";
  };

  pokeTimerCall = () => {
    //console.log("POKETIMER CALL");
    fetch(TIMER_URL).then(res => {
      res.json().then(res => {
        expiration = res.timer.expiration;
        let { expiration } = res.timer;
        let countdown = new Date(expiration).getTime();
        let doEachInterval = () => {
          let now = new Date().getTime();
          let distance = countdown - now;
          console.log("miliseconds in timer", distance);
          this.setState({
            timer: distance,
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
          });
          if (distance < 0) {
            clearInterval(timer);
            this.enableNewPokemon().then(this.initializeExpirationTime());
          }
        };
        let timer = setInterval(doEachInterval, SECOND);
      });
    });
  };

  newPokemonOnClick = () => {
    if (this.state.enableNewPokemon) {
      fetch(NEW_POKEMON_URL).then(res => {
        res.json().then(res => {
          // console.log("ima li te", res.pokemon.expiration);
          this.setState({
            pokemon: res.pokemon.Pokemon,
            pokemonName: res.pokemon.Pokemon.pokemonName,
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
    }
  };

  render() {
    //console.log("odbrojavanje", this.state.timer);
    let { pokemonType, timer, days, hours, minutes, seconds } = this.state;
    //console.log("enable: ", this.state.enableNewPokemon);
    //console.log("seconds in render: ", seconds);

    if (pokemonType.length > 1) {
      pokemonType = pokemonType.join("  ");
    }

    let pokeData = () => {
      let data = (
        <div>
          {this.state.enableNewPokemon ? (
            <div>
              <div>#??? </div>
              <div>{"\n"} </div>
              <div> {"\n"} </div>
              <div className="PokemonDescription">
                <p>{"\n"}</p>
                {"\n"}
              </div>
            </div>
          ) : (
            <div>
              <div
                style={{
                  opacity: this.state.pokemonName.length > 0 ? "1" : "0.3"
                }}
              >
                #{this.get3D(this.state.pokemonId)}
              </div>
              <div>{this.state.pokemonName}</div>
              <div> {pokemonType} </div>
              <div className="PokemonDescription">
                <p>{"\n"}</p>
                {this.state.pokemonDescription}
              </div>
            </div>
          )}
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
          <div
            style={{
              cursor: this.state.enableNewPokemon ? "pointer" : "default"
            }}
            className="PokemonData"
            onClick={this.newPokemonOnClick}
          >
            <PokemonImage
              enableNewPokemon={this.state.enableNewPokemon}
              pokemonName={this.state.pokemon.pokemonName}
            />
            {pokeData()}
          </div>
          <div className="TimerContainer">
            Time to new pokemon:
            {this.state.enableNewPokemon ? (
              <div>Catch new pokemon!!</div>
            ) : (
              <div>
                {days + "d " + hours + "h " + minutes + "m " + seconds + "s "}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
