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
} from "../pokemonImages/index";

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

export default class PokemonImage extends React.Component {
  returnChosenPokemon = () => {
    let index = 0;
    for (let i = 0; i < pokemon.length; i++) {
      if (pokemon[i].includes(this.props.pokemonName)) {
        return i;
      }
    }
    return index;
  };

  render() {
    let index = 0;
    if (!this.props.enableNewPokemon) {
      index = this.returnChosenPokemon();
    }

    return (
      <img
        className="PokemonImage"
        src={pokemon[index]}
        style={{
          opacity:
            index === 0 ? (this.props.enableNewPokemon ? "1" : "0.3") : "1"
        }}
        //src={Caterpie}
        alt="Pokemon picture"
      />
    );
  }
}
