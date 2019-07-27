import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonData from "./PokemonData";

export default function Pokemon({
  pokemonId,
  pokemonName,
  pokemonType,
  pokemonDescription,
  enableNewPokemon,
  newPokemonOnClick
}) {
  return (
    <div
      style={{
        cursor: enableNewPokemon ? "pointer" : "default"
      }}
      className="PokemonData"
      onClick={newPokemonOnClick}
    >
      <PokemonImage
        pokemonName={pokemonName}
        enableNewPokemon={enableNewPokemon}
      />
      <PokemonData
        pokemonId={pokemonId}
        pokemonName={pokemonName}
        pokemonType={pokemonType}
        pokemonDescription={pokemonDescription}
        enableNewPokemon={enableNewPokemon}
      />
    </div>
  );
}
