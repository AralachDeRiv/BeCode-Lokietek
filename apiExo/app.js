const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
