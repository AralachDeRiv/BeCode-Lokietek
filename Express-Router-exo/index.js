const express = require("express");
const app = express();
const PORT = 3000;

const usersRouter = require("./routes/User");
const postRouter = require("./routes/Post");
const commentRouter = require("./routes/Comment");

app.use("/users", usersRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((req, res) => {
  res.send("Oups");
});

app.listen(PORT, () => {
  console.log("listening");
});
