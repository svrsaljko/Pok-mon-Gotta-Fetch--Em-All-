import React, { Component } from "react";
import PokemonAndCoins from "./pages/PokemonAndCoins";
import Header from "./components/Header";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PokemonAndCoins />
      </div>
    );
  }
}

export default App;
