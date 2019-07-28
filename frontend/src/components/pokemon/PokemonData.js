import React from "react";
import PokemonId from "./PokemonId";
import { connect } from "react-redux";

function PokemonData({ state }) {
  let { pokemonName, pokemonType, pokemonDescription } = state;
  let data = (
    <div>
      <PokemonId />
      <div>{pokemonName}</div>
      <div> {pokemonType} </div>
      <div className="PokemonDescription">
        <p>{"\n"}</p>
        {pokemonDescription}
      </div>
    </div>
  );
  return data;
}

const mapStateToProps = state => {
  state = state.pokemonReducer;
  return {
    state
  };
};

export default connect(mapStateToProps)(PokemonData);
