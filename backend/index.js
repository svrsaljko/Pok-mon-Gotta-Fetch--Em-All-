const express = require("express");
//DELETE THIS module
//const cors = require("cors");
//const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

const Pokemon = require("./Pokemon.js");
const Timer = require("./timer.js");

const PORT = 8000;
const ORIGIN_URL = "http://localhost:1234";
let response = { status: "", message: "" };

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pokemondb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", ORIGIN_URL);
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, GET, OPTIONS, DELETE"
  );

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
  {
    username: "Stipe",
    password: "a"
  }
];

const addUser = function(username, password) {};
const userExist = function(username, password) {
  console.log("userExist chechking => username: ", username);
  console.log("users.length: ", users.length);
  console.log("all fucking users: ", users);
  // for (let i = 0; i < users.length; i++) {
  //   console.log("i trenutni: ", i + 1);
  //   console.log("spremljen user: ", users[i].username);
  // }
  //console.log("example: ", users[0]);
  for (let i = 0; i < users.length; i++) {
    console.log("user: ", users[i].username);
    if (users[i].username === username) {
      console.log("spremljen user: ", users[i].username);
      return true;
    }
  }
  return false;
  //console.log("korisici: ", users);
};

//DELETE THIS
app.get("/users", (req, res) => {
  res.json({ users });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let status = userExist(username);
  res.json({ userExist: status });
});

app.post("/register", (req, res) => {
  //console.log("POST");
  const { username, password } = req.body;
  //addUser(username, password);
  let mysqlquery =
    "INSERT INTO `user` (username,password) VALUES (" +
    mysql.escape(username) +
    ", " +
    mysql.escape(password) +
    ")";
  //console.log("query: " + mysqlquery);
  con.query(mysqlquery, function(err, result) {
    if (err) {
      response.status = "error";
      response.message = err.message;
    } else {
      response.status = "ok";
      response.message = "User successfully registered";
      console.log("User successfully registered");
    }
    console.log("Response: " + response);
    res.send(response);
  });

  //console.log("username", username);
  //users.push({ username, password });
  //  console.log("korisici: ", users);
});

app.get("/pokemon/timer", (req, res) => {
  const timer = new Timer(1000);

  res.json({ timer });
});

app.get("/coinsTimer", (req, res) => {
  const timer = new Timer(4000);

  res.json({ timer });
});

app.get("/pokemon/new", (req, res) => {
  const pokemon = new Pokemon();
  res.json({ pokemon });
});

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
