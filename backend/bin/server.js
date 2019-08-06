const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;
const ORIGIN_URL = "http://localhost:1234";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", ORIGIN_URL);
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST,PATCH,PUT, GET, OPTIONS, DELETE"
  );

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});

module.exports = app;
