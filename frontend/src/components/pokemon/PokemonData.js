import React from "react";
import PokemonId from "./PokemonId";

export default function PokemonData({
  pokemonId,
  pokemonName,
  pokemonType,
  pokemonDescription,
  enableNewPokemon
}) {
  let data = (
    <div>
      <PokemonId enableNewPokemon={enableNewPokemon} pokemonId={pokemonId} />
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
