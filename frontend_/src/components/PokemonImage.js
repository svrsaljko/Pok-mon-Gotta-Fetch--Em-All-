import React from "react";
import {
  Pokeball,
  Bulbasaur,
  Squirtle,
  Charmander
} from "../pokemonImages/index";

const pokemon = [Pokeball, Bulbasaur, Squirtle, Charmander];

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
    let index = this.returnChosenPokemon();
    return (
      <img
        className="PokemonImage"
        src={pokemon[index]}
        alt="Pokemon picture"
      />
    );
  }
}
