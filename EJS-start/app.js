const express = require("express");

const app = express();
const PORT = 3000;

app.set("views", "./EJS-start/views");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log("listening");
  console.log(__dirname);
});
