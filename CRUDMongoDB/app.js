const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./userSchema");

const url = "mongodb://localhost:27017/testUserCrud";

const app = express();
app.use(express.json());

const start = async () => {
  try {
    mongoose.connect(url);
    app.listen(3000, () => {
      console.log("Listening");
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();

app.get("/users", async (req, res) => {
  const users = await User.find().sort({ name: "asc" });
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
});

app.post("/users", async (req, res) => {
  const user = req.body;
  const result = await User.create(user);
  res.json(result);
});

app.patch("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const result = await User.updateOne({ _id: id }, updates);
  res.json(result);
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const result = await User.deleteOne({ _id: id });
  res.json(result);
});
