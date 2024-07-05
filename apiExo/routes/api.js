const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const apiKey = "blabla";
const data = {
  "KUGF-57JNJ-JFNJDK-OUH3": {
    username: "Glouglou43",
    firstName: "Henrique",
    lastName: "Vieira",
    age: 35,
    isAdmin: true,
  },
};
const paramsDataObjs = ["username", "firstName", "lastName", "age", "isAdmin"];

const verifyId = (req, res, next) => {
  const { id } = req.params;
  if (!data[id]) {
    res.status(404).send("Not valid id");
  } else {
    next();
  }
};

const verifyApiKey = (req, res, next) => {
  const { api_key } = req.query;
  if (api_key == apiKey) {
    next();
  } else {
    res.status(404).send("No authorized api key");
  }
};

const verifyData = (req, res, next) => {
  const dataBody = req.body;
  const allSet = paramsDataObjs.every((p) => dataBody[p]);
  const unknowParamTest = Object.keys(dataBody).every(
    (k) => paramsDataObjs.indexOf(k) !== -1
  );
  if (!allSet) {
    res.status(404).send("Missing params in body");
  } else if (!unknowParamTest) {
    res.status(404).send("Unknown params in body");
  } else if (!Number.isInteger(parseInt(dataBody["age"]))) {
    res.status(404).send("Age must be Integer");
  } else if (
    dataBody["isAdmin"] !== "true" &&
    dataBody["isAdmin"] !== "false"
  ) {
    res.status(404).send("IsAdmin must be Boolean");
  } else {
    next();
  }
};

router.get("/users", (req, res) => {
  res.send(data);
});

router.get("/users/:id", verifyId, (req, res) => {
  const { id } = req.params;
  res.send(data[id]);
});

router.post("/users", verifyApiKey, verifyData, (req, res) => {
  const id = uuidv4();
  let dataBody = req.body;
  dataBody["age"] = Number.parseInt(dataBody["age"]);
  dataBody["isAdmin"] = true ? dataBody["isAdmin"] == "true" : false;
  data[id] = dataBody;
  res.send("Done");
});

const modifyData = (req, res, next) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    for (let key in newData) {
      if (key == "age") {
        newData[key] = Number.parseInt(newData[key]);
        if (!newData[key]) {
          throw new Error("Age must be an integer");
        }
      }
      if (key == "isAdmin") {
        if (newData[key] !== "true" && newData[key] !== "false") {
          throw new Error("isAdmin must be an boolean");
        } else {
          newData[key] = newData[key] == "true";
          console.log(newData[key]);
        }
      }
      if (paramsDataObjs.indexOf(key) !== -1) {
        // **** js
        if (newData[key] == "" && key !== "isAdmin") {
          throw new Error(`not value for ${key}`);
        } else {
          data[id][key] = newData[key];
        }
      }
    }
    next();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

router.put("/users/:id", verifyApiKey, verifyId, modifyData, (req, res) => {
  res.send("done");
});

router.delete("/users/:id", verifyApiKey, verifyId, (req, res) => {
  const { id } = req.params;
  delete data[id];
  res.send("done");
});

module.exports = router;
