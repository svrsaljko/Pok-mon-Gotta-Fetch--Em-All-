import React from "react";

export default function PokemonTimer(props) {
  return (
    <div className="TimerContainer">
      Time to new pokemon:
      {props.enableNewPokemon ? (
        <div>Catch new pokemon!!</div>
      ) : (
        <div>
          {props.days +
            "d " +
            props.hours +
            "h " +
            props.minutes +
            "m " +
            props.seconds +
            "s "}
        </div>
      )}
    </div>
  );
}
