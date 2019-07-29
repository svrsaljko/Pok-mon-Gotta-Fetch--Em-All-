import React, { Component } from "react";
import PokemonAndCoins from "./pages/PokemonAndCoins";
import UserProfile from "./pages/UserProfile";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route exact path="/" component={PokemonAndCoins} />
          <Route path="/user" component={UserProfile} />
        </Router>
      </div>
    );
  }
}

export default App;
