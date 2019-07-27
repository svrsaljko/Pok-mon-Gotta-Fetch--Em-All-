import React, { Component } from "react";
import PokemonTimer from "../components/timer/PokemonTimer";
import PokemonTrainer from "../components/PokemonTrainer";
import Pokemon from "../components/pokemon/Pokemon";
import {
  seconds,
  minutes,
  hours,
  days
} from "../components/timer/CalculateTime";
import { NEW_POKEMON_URL, TIMER_URL, SECOND } from "../components/Helper";

export class PokemonAndCoins extends Component {
  state = {
    pokemonName: "\n",
    pokemonId: "#???",
    pokemonType: "\n",
    pokemonDescription: "\n",
    enableNewPokemon: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  enableNewPokemon = () => {
    return new Promise(resolve => {
      resolve(
        this.setState({
          enableNewPokemon: true,
          pokemonName: "\n",
          pokemonType: "\n",
          pokemonDescription: "\n"
        })
      );
    });
  };

  setTimerState = distance => {
    this.setState({
      days: days(distance),
      hours: hours(distance),
      minutes: minutes(distance),
      seconds: seconds(distance)
    });
  };

  initializeExpirationTime = () => {
    return fetch(TIMER_URL).then(res => {
      res.json().then(res => {
        let now = new Date().getTime();
        let distance = new Date(res.timer.expiration).getTime();
        distance -= now;
        this.setTimerState(distance);
      });
    });
  };

  pokeTimerCall = () => {
    fetch(TIMER_URL).then(res => {
      res.json().then(res => {
        expiration = res.timer.expiration;
        let { expiration } = res.timer;
        let countdown = new Date(expiration).getTime();
        let doEachInterval = () => {
          let now = new Date().getTime();
          let distance = countdown - now;

          this.setTimerState(distance);

          if (distance < 0) {
            clearInterval(timer);
            this.enableNewPokemon().then(this.initializeExpirationTime());
          }
        };
        let timer = setInterval(doEachInterval, SECOND);
      });
    });
  };

  setPokemonState = Pokemon => {
    this.setState({
      pokemonName: Pokemon.pokemonName,
      pokemonId: Pokemon.pokemonId,
      pokemonType:
        Pokemon.pokemonType.length > 1
          ? Pokemon.pokemonType.join("  ")
          : Pokemon.pokemonType,
      pokemonDescription: Pokemon.description,
      enableNewPokemon: false
    });
  };

  newPokemonOnClick = () => {
    let { enableNewPokemon } = this.state;

    if (enableNewPokemon) {
      fetch(NEW_POKEMON_URL).then(res => {
        res.json().then(res => {
          this.setPokemonState(res.pokemon.Pokemon);
          this.pokeTimerCall();
        });
      });
    }
  };

  componentDidMount() {
    this.initializeExpirationTime().then(this.pokeTimerCall());
  }

  render() {
    let {
      pokemonName,
      pokemonType,
      pokemonDescription,
      pokemonId,
      enableNewPokemon,
      days,
      hours,
      minutes,
      seconds
    } = this.state;

    return (
      <div className="PokemonContainer">
        <PokemonTrainer />
        <Pokemon
          enableNewPokemon={enableNewPokemon}
          pokemonName={pokemonName}
          newPokemonOnClick={this.newPokemonOnClick}
          pokemonType={pokemonType}
          pokemonDescription={pokemonDescription}
          pokemonId={pokemonId}
        />
        <PokemonTimer
          className="TimerContainer"
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          enableNewPokemon={enableNewPokemon}
        />
      </div>
    );
  }
}

export default PokemonAndCoins;
