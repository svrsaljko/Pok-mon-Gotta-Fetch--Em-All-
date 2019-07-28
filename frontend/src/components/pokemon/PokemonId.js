import React from "react";
import { get3D } from "../../components/Helper";
import { connect } from "react-redux";

function PokemonId({ pokemonId, enableNewPokemon }) {
  return enableNewPokemon ? (
    <div>#???</div>
  ) : (
    <div
      style={{
        opacity: pokemonId.includes("?") ? "0.3" : "1"
      }}
    >
      #{get3D(pokemonId)}
    </div>
  );
}

const mapStateToProps = state => {
  let pokemonId = state.pokemonReducer.pokemonId;
  let enableNewPokemon = state.pokemonReducer.enableNewPokemon;

  return {
    pokemonId,
    enableNewPokemon
  };
};

export default connect(mapStateToProps)(PokemonId);
