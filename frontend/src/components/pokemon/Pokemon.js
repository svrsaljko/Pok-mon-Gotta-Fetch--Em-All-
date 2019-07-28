import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonData from "./PokemonData";
import { connect } from "react-redux";

function Pokemon(props) {
  let { enableNewPokemon } = props.state;
  let { newPokemonOnClick } = props;
  return (
    <div
      style={{
        cursor: enableNewPokemon ? "pointer" : "default"
      }}
      className="PokemonData"
      onClick={newPokemonOnClick}
    >
      <PokemonImage />
      <PokemonData />
    </div>
  );
}

const mapStateToProps = state => {
  state = state.pokemonReducer;
  return {
    state
  };
};

export default connect(mapStateToProps)(Pokemon);
