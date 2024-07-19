const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const url = "mongodb://localhost:27017/ToDosDB";

const toDoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    immutable: true,
  },
});

const ToDosDB = mongoose.model("Todos", toDoSchema);

const app = express();
app.use(express.json());
app.use(cors());

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

app.get("/todos", async (req, res) => {
  const todos = await ToDosDB.find().sort({ createdAt: "asc" });
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const todo = req.body;
  const result = await ToDosDB.create(todo);
  res.json(result);
});

app.delete("/todos/:date", async (req, res) => {
  const date = req.params.date;
  const result = await ToDosDB.deleteOne({ createdAt: date });
  res.json(result);
});
