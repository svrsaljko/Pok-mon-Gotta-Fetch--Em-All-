const express = require("express");
//DELETE THIS module
//const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const Pokemon = require("./Pokemon.js");
const Timer = require("./timer.js");

const PORT = 8000;
const ORIGIN_URL = "http://localhost:1234";

//app.use(cors({ origin: ORIGIN_URL }));

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

const addUser = function(username, password) {
  //console.log("username", username);
  users.push({ username, password });
  //  console.log("korisici: ", users);
};
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
  addUser(username, password);
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

// const express = require("express");
// const cors = require("cors");
// const Pokemon = require("./Pokemon.js");
// const Timer = require("./timer.js");
// const PORT = 8000;
// const app = express();
// const ORIGIN_URL = "http://localhost:1234/";

// app.use(
//   cors({
//     ORIGIN_URL
//     // credentials: true,
//     // methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     // preflightContinue: false,
//     // optionsSuccessStatus: 204
//   })
// );

// // app.use((req, res, next) => {
// //   res.setHeader("Access-Control-Allow-Origin", "http://localhost:1234");
// //   res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
// //   res.setHeader(
// //     "Access-Control-Allow-Methods",
// //     "POST, PUT, GET, OPTIONS, DELETE"
// //   );

// //   next();
// // });

// app.get("/pokemon/timer", (req, res) => {
//   const timer = new Timer(1000);

//   res.json({ timer });
// });

// app.get("/coinsTimer", (req, res) => {
//   const timer = new Timer(4000);

//   res.json({ timer });
// });

// app.get("/pokemon/new", (req, res) => {
//   const pokemon = new Pokemon();
//   res.json({ pokemon });
// });

// app.listen(PORT, () => {
//   console.log("listening on port: ", PORT);
// });
