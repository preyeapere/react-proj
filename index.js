const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("i am doing great");
  });
  
  app.get("/me", (req, res) => {
    res.send("Hi i am preye");
  });
  
  app.listen(3500, () => {
    console.log("I love preye.....");
  })