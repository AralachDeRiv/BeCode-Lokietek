const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const verifyUserID = (req, res, next) => {
  if (req.params.id == "Henrique") {
    res.send("Hello Henrique !");
  } else {
    next();
  }
};

router.get("/:id", verifyUserID, (req, res) => {
  res.send(`Hi ${req.params.id} !`);
});

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
