import React from "react";
import { Link } from "react-router-dom";

function PokemonTrainer(props) {
  let username = localStorage.getItem("username", username);
  return (
    <div className="UserContainer">
      <div>
        Welcome
        <Link to="/useraa">
          <button className="UserButton">{username}</button>
        </Link>
      </div>
      <div>COINS: 100</div>
      <button className="CollectCoinsButton">COLLECT</button>
    </div>
  );
}

export default PokemonTrainer;
