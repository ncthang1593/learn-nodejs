const express = require("express");
const app = express();

console.log(app);

app.get("/", (req, res) => {
  res.send("Hello, World!");
  console.log("update 1")
});