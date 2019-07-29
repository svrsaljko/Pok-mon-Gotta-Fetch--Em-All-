import React from "react";
import { Link } from "react-router-dom";

export default function PokemonTrainer() {
  return (
    <div className="UserContainer">
      <div>
        Welcome
        <Link to="/user">
          <button className="UserButton">USER</button>
        </Link>
      </div>
      <div>COINS: 100</div>
      <button className="CollectCoins">COLLECT</button>
    </div>
  );
}
