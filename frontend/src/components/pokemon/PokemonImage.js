import React from "react";
import {
  Pokeball,
  Bulbasaur,
  Ivysaur,
  Venusaur,
  Charmander,
  Charmeleon,
  Charizard,
  Squirtle,
  Wartortle,
  Blastoise,
  Caterpie,
  Metapod,
  Butterfree,
  Weedle,
  Kakuna,
  Beedrill
} from "../../pokemonImages/index.js";
import { connect } from "react-redux";

const pokemon = [
  Pokeball,
  Bulbasaur,
  Ivysaur,
  Venusaur,
  Charmander,
  Charmeleon,
  Charizard,
  Squirtle,
  Wartortle,
  Blastoise,
  Caterpie,
  Metapod,
  Butterfree,
  Weedle,
  Kakuna,
  Beedrill
];

class PokemonImage extends React.Component {
  returnChosenPokemon = () => {
    let { pokemonName } = this.props;

    let index = 0;
    for (let i = 0; i < pokemon.length; i++) {
      if (pokemon[i].includes(pokemonName)) {
        return i;
      }
    }
    return index;
  };

  render() {
    let { enableNewPokemon } = this.props;
    let index = 0;
    if (!enableNewPokemon) {
      index = this.returnChosenPokemon();
    }

    return (
      <img
        className="PokemonImage"
        src={pokemon[index]}
        style={{
          opacity: index === 0 ? (enableNewPokemon ? "1" : "0.3") : "1"
        }}
        alt="Pokemon picture"
      />
    );
  }
}

const mapStateToProps = state => {
  let { enableNewPokemon } = state.pokemonReducer;
  let { pokemonName } = state.pokemonReducer;
  return {
    pokemonName,
    enableNewPokemon
  };
};

export default connect(mapStateToProps)(PokemonImage);
