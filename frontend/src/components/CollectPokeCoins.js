import React from "react";
import { connect } from "react-redux";
import PokeCoin1 from "../pokemonImages/PokeCoin1.png";

function CollectPokeCoins({ state, enableNewPokemon }) {
  let { days, hours, minutes, seconds } = state;

  return (
    <div style={{ marginLeft: "6rem", marginTop: "6rem" }}>
      <div style={{ minWidth: "232px" }}>
        {!enableNewPokemon ? (
          <div> Time to get more pokecoins:</div>
        ) : (
          <div> Collect coins!! </div>
        )}
      </div>
      {enableNewPokemon ? (
        <div
          style={{
            minHeight: "30px",
            marginTop: "0.5rem",
            display: "flex",
            flexDirection: "row"
            //border: "3px solid black"
          }}
        >
          <div style={{ marginTop: "0.4rem", marginRight: "0.4rem" }}>100</div>
          <img
            style={{ width: "1.8rem", height: "1.8rem" }}
            src={PokeCoin1}
            alt="A"
          />
        </div>
      ) : (
        <div style={{ minHeight: "30px" }}>
          {days + "d " + hours + "h " + minutes + "m " + seconds + "s "}
        </div>
      )}
      <button className="CollectCoinsButton">COLLECT</button>
    </div>
  );
}

const mapStateToProps = state => {
  let { enableNewPokemon } = state.pokemonReducer;
  state = state.pokemonTimerReducer;
  return {
    state,
    enableNewPokemon
  };
};

export default connect(mapStateToProps)(CollectPokeCoins);
