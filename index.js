const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("I love preye");
  });
  
  app.get("/me", (req, res) => {
    res.send("Hi i am preye");
  });
  
  app.listen(3500, () => {
    console.log("Server is running and connected.....");
  })