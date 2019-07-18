import React, { Component } from "react";
import Header from "./src/components/Header";
import PokemonImage from "./src/components/PokemonImage";
import "./App.css";

const NEW_POKEMON_URL = "http://localhost:8000/pokemon/new";
const TIMER_URL = "http://localhost:8000/pokemon/timer";

export class App extends Component {
  state = {
    pokemon: "",
    birthdate: null,
    pokemonId: "0",
    pokemonType: "",
    pokemonDescription: "",
    timer: 1,
    countdown: 1,
    expiration: null
  };

  componentDidMount() {
    fetch(TIMER_URL).then(res => {
      res.json().then(res => {
        console.log("timer", res.timer.expiration);
        let expiration = res.timer.expiration;
        let countdown = new Date(expiration).getTime() - new Date().getTime();
        console.log("did mount expiration", expiration);
        this.setState({ expiration });
        //  this.setState({ countdown, timer: countdown });
        this.pokeTimerCall();
      });
    });
  }

  get3D = num => {
    if (num.toString().length == 1) {
      return "00" + num;
    } else if (num.toString().length == 2) {
      return "0" + num;
    } else return "000";
  };

  pokeTimerCall = () => {
    let { timer, expiration } = this.state;
    console.log("expiration", expiration);
    let countdown = new Date(expiration).getTime();
    console.log("countdown: ", countdown);
    if (expiration != null) {
      let x = setInterval(() => {
        let now = new Date().getTime();
        console.log("now", now);
        let distance = countdown - now;
        //console.log("DISTANCE", distance);
        this.setState({ timer: distance });
        if (distance < 0) {
          clearInterval(x);
        }
      }, 1000);
    }
  };

  newPokemonOnClick = () => {
    fetch(NEW_POKEMON_URL).then(res => {
      res.json().then(res => {
        //console.log("pokemon", res.pokemon.Pokemon.description);
        this.setState({
          pokemon: res.pokemon.Pokemon,
          pokemonId: res.pokemon.Pokemon.pokemonId,
          birthdate: res.pokemon.birthdate,
          pokemonType: res.pokemon.Pokemon.pokemonType,
          pokemonDescription: res.pokemon.Pokemon.description
        });
      });
    });
    //    console.log("NEW POKEMON");
  };

  render() {
    //console.log("opis: ", this.state.pokemonDescription);
    //let { timer } = this.state;
    // console.log("timer: ", this.state.timer);
    let { pokemonType } = this.state;
    if (pokemonType.length > 1) {
      pokemonType = pokemonType.join("  ");
    }
    return (
      <div className="SiteContainer">
        <Header />
        <div className="PokemonContainer">
          <div className="UserContainer">
            <div>
              Welcome <button className="UserButton">USER</button>
            </div>
            <div>COINS: 100</div>
            <button className="CollectCoins">COLLECT</button>
          </div>
          <div className="PokemonData" onClick={this.newPokemonOnClick}>
            <PokemonImage pokemonName={this.state.pokemon.pokemonName} />
            <div>#{this.get3D(this.state.pokemonId)}</div>
            <div>{this.state.pokemon.pokemonName}</div>
            <div> {pokemonType} </div>
            <div className="PokemonDescription">
              <p>{"\n"}</p>
              {this.state.pokemonDescription}
            </div>
          </div>
          <div className="TimerContainer">
            Time to new pokemon:
            <div>{Math.floor((this.state.timer % (1000 * 60)) / 1000)}s</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {
//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML =
//     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
