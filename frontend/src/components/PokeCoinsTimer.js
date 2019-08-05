import React from "react";
import { connect } from "react-redux";
import PokeCoin1 from "../pokemonImages/PokeCoin1.png";

function PokeCoinsTimer({ state, enableNewPokemon }) {
  let { days, hours, minutes, seconds } = state;

  return (
    <div
      className="PokeCoinsTimerContainer"
      style={
        {
          //border: "3px solid black",
        }
      }
    >
      <div
        style={{
          minWidth: "232px"
          //border: "3px solid black"
        }}
      >
        {!enableNewPokemon ? (
          <div> Time to get more pokecoins:</div>
        ) : (
          <div> Collect coins!! </div>
        )}
      </div>
      {enableNewPokemon ? (
        <div
          style={{
            minHeight: "42px",
            display: "flex",
            flexDirection: "row"
            //border: "3px solid black"
          }}
        >
          <div
            style={{
              marginTop: "0.4rem",
              marginRight: "0.4rem",
              color: "palevioletred"
              //border: "3px solid black"
            }}
          >
            100
          </div>
          <img
            style={{
              //marginTop: "0.4rem",

              //              border: "3px solid black",
              width: "1.8rem",
              height: "1.8rem"
            }}
            src={PokeCoin1}
            alt="A"
          />
        </div>
      ) : (
        <div
          style={{
            minHeight: "42px"
            //  border: "3px solid black"
          }}
        >
          {days + "d " + hours + "h " + minutes + "m " + seconds + "s "}
        </div>
      )}

      {!enableNewPokemon ? (
        <div
          style={{
            //border: "3px solid black",
            minHeight: "30px"
          }}
        />
      ) : (
        <div
          style={{
            //border: "3px solid black",
            minHeight: "30px"
          }}
        >
          <button className="CollectCoinsButton">COLLECT</button>
        </div>
      )}
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

export default connect(mapStateToProps)(PokeCoinsTimer);
