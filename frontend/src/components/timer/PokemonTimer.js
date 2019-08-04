import React from "react";
import { connect } from "react-redux";

function PokemonTimer({ state, enableNewPokemon }) {
  let { days, hours, minutes, seconds } = state;

  return (
    <div className="TimerContainer">
      Time to new pokemon:
      {enableNewPokemon ? (
        <div>Catch new pokemon!!</div>
      ) : (
        <div>
          {days + "d " + hours + "h " + minutes + "m " + seconds + "s "}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  let { enableNewPokemon } = state.pokemonReducer;
  state = state.pokemonTimerReducer;
  return {
    state,
    enableNewPokemon
  };
};

export default connect(mapStateToProps)(PokemonTimer);
