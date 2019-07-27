import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonData from "../components/PokemonData";

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
        enableNewPokemon={enableNewPokemon}
        pokemonName={pokemonName}
      />
      <PokemonData
        pokemonType={pokemonType}
        pokemonName={pokemonName}
        pokemonDescription={pokemonDescription}
        enableNewPokemon={enableNewPokemon}
        pokemonId={pokemonId}
      />
    </div>
  );
}
