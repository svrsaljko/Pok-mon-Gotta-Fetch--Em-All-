import React from "react";
import { get3D } from "../components/Helper";

export default function PokemonId({ pokemonId, enableNewPokemon }) {
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
