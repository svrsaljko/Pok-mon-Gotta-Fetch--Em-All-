import React from "react";
import { Bulbasaur, Squirtle, Charmander } from "../pokemonImages/index";

const pokemon = {
  pokemon: { Squirtle, Charmander, Bulbasaur }
};

export default class PokemonImage extends React.Component {
  render() {
    console.log("evo ga: ", this.props.pokemonName);
    console.log("pokemon ", pokemon.pokemon);
    return <img src={Bulbasaur} alt="Pokemon picture" />;
  }
}
