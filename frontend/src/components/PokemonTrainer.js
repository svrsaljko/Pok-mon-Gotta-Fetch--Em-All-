import React from "react";
import { Link } from "react-router-dom";

const USER_URL = "http://localhost:8000/user";

let fetchUser = () => {
  console.log("aaa");
  fetch(USER_URL, (req, res) => {
    res.then(res.json()).then(res => console.log("res: ", res));
  });
};

function PokemonTrainer() {
  return (
    <div className="UserContainer">
      <div>
        Welcome
        <Link to="/user">
          <button onClick={fetchUser} className="UserButton">
            USER
          </button>
        </Link>
      </div>
      <div>COINS: 100</div>
      <button className="CollectCoinsButton">COLLECT</button>
    </div>
  );
}

export default PokemonTrainer;
