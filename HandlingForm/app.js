const express = require("express");
const app = express();
const PORT = 3000;

const data = [];

app.set("views", "./HandlingForm/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/add", (req, res) => {
  data.push(req.body);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index.ejs", { data });
});

app.listen(PORT, () => {
  console.log("Listening on port :" + PORT);
});
