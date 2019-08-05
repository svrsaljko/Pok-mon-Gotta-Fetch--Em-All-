import React, { Component } from "react";
import Header from "./components/Header";
import PokemonAndCoins from "./pages/PokemonAndCoins";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Pokedex from "./pages/Pokedex";
import Shop from "./pages/Shop";
import ErrorComponent from "./pages/ErrorComponent";
import { PrivateRoute, PublicRoute } from "./components/Routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />

          <Switch>
            <PrivateRoute
              exact
              path="/home/:username"
              component={PokemonAndCoins}
            />
            <PrivateRoute
              exact
              path="/user/:username"
              component={UserProfile}
            />
            <PrivateRoute exact path="/pokedex/:username" component={Pokedex} />
            <PrivateRoute exact path="/shop/:username" component={Shop} />
            <PublicRoute
              restricted={true}
              exact
              path="/register"
              component={Register}
            />
            <PublicRoute restricted={true} exact path="/" component={LogIn} />
            <PublicRoute component={ErrorComponent} path="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
