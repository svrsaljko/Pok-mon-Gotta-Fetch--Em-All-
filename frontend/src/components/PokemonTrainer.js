import React from "react";

export default function PokemonTrainer() {
  return (
    <div className="UserContainer">
      <div>
        Welcome <button className="UserButton">USER</button>
      </div>
      <div>COINS: 100</div>
      <button className="CollectCoins">COLLECT</button>
    </div>
  );
}
