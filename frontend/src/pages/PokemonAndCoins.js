import React, { Component } from "react";
import NavBar from "../components/NavBar";
import PokemonTimer from "../components/timer/PokemonTimer";
import PokeCoinsTimer from "../components/PokeCoinsTimer";
import Pokemon from "../components/pokemon/Pokemon";
import { NEW_POKEMON_URL, TIMER_URL, SECOND } from "../components/Helper";
import {
  setHeaderFlag,
  setTimerState,
  enableNewPokemon,
  setPokemonState
} from "../actions/actions";
import {
  isUserAuthenticated,
  redirectToError,
  getUsername,
  getIdFromLocalStorage,
  setExpirationDateToLocalStorage
} from "../components/AuthService";
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
        if (this.props.state.enableNewPokemon === false) {
          let now = new Date().getTime();
          let distance = new Date(res.timer.expiration).getTime();
          distance -= now;
          this.setTimerState(distance);
        }
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
    this.props.setPokemonState(pokemon);
  };

  newPokemonOnClick = () => {
    if (isUserAuthenticated()) {
      let { enableNewPokemon } = this.props.state.pokemonReducer;

      if (enableNewPokemon) {
        fetch(NEW_POKEMON_URL).then(res => {
          res.json().then(res => {
            this.setPokemonState(res.pokemon.Pokemon);
            this.pokeTimerCall();
          });
        });
      }
    } else {
      alert("Unauthorized access");
    }
  };

  onParamsChange = () => {
    let { username } = this.props.match.params;
    let _username = getUsername();
    if (username !== _username) {
      redirectToError(this.props.history);
    }
  };

  checkTheTimer = userId => {
    fetch(`${TIMER_URL}/check`, {
      method: "POST",
      body: JSON.stringify({ userId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.flag) {
          setExpirationDateToLocalStorage(res.data);
        }
        console.log("res", res);
      })
      .catch();
  };

  patchIdToTimer = userId => {
    fetch(TIMER_URL, {
      method: "PATCH",
      body: JSON.stringify({ userId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => console.log("PATCH res:", res))
      .catch(error => console.error(error));
  };

  componentDidMount() {
    //this.patchIdToTimer(getIdFromLocalStorage());
    this.checkTheTimer(getIdFromLocalStorage());
    console.log("APP JS CDM", this.props.state.pokemonReducer.enableNewPokemon);
    this.props.setHeaderFlag(true);
    this.onParamsChange();
    //this.initializeExpirationTime().then(this.pokeTimerCall());
  }

  componentWillUnmount() {
    this.props.setHeaderFlag(false);
  }

  render() {
    console.log(
      "APP JS RENDER",
      this.props.state.pokemonReducer.enableNewPokemon
    );
    //redirectToError(this.props.history, this.props.match.params.username);
    return (
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="HomeContainer"
      >
        <div className="PokemonContainer">
          <PokeCoinsTimer />
          <Pokemon newPokemonOnClick={this.newPokemonOnClick} />
          <PokemonTimer />
        </div>
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
    setPokemonState: pokemon => dispatch(setPokemonState(pokemon)),
    setHeaderFlag: flag => dispatch(setHeaderFlag(flag))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonAndCoins);
