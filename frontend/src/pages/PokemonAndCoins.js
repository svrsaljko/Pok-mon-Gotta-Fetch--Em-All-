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
import {
  setTimerState,
  enableNewPokemon,
  setPokemonState
} from "../actions/actions";
import { connect } from "react-redux";

export class PokemonAndCoins extends Component {
  enableNewPokemon = () => {
    return new Promise(resolve => {
      resolve(this.props.enableNewPokemon());
    });
  };

  setTimerState = distance => {
    this.props.setTimerState(distance);
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

  setPokemonState = pokemon => {
    console.log("upa sam u sistem");
    this.props.setPokemonState(pokemon);
  };

  newPokemonOnClick = () => {
    console.log("new pokemon clicked");
    let { enableNewPokemon } = this.props.state;

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
    console.log("propsi", this.props.state.enableNewPokemon);
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
    } = this.props.state;
    console.log("pokemonId", pokemonId);

    return (
      <div className="PokemonContainer">
        <PokemonTrainer />
        <Pokemon
          pokemonId={pokemonId}
          pokemonName={pokemonName}
          pokemonType={pokemonType}
          pokemonDescription={pokemonDescription}
          enableNewPokemon={enableNewPokemon}
          newPokemonOnClick={this.newPokemonOnClick}
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

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTimerState: distance => dispatch(setTimerState(distance)),
    enableNewPokemon: () => dispatch(enableNewPokemon()),
    setPokemonState: pokemon => dispatch(setPokemonState(pokemon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonAndCoins);
