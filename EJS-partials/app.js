const express = require("express");
const app = express();
const PORT = 3000;

app.set("views", "./EJS-partials/views");
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(PORT, () => {
  console.log("listening");
});
