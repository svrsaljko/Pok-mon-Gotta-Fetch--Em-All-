import React, { Component } from "react";
import Header from "./components/Header";
import PokemonAndCoins from "./pages/PokemonAndCoins";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import ErrorComponent from "./pages/ErrorComponent";
import { PrivateRoute, PublicRoute } from "./components/Routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <PrivateRoute
              exact
              path="/user/:username"
              component={PokemonAndCoins}
            />
            <PrivateRoute exact path="/useraa" component={UserProfile} />
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
