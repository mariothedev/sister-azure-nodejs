const app = require("express")();
const { MongoClient } = require("mongodb");
require("dotenv").config();

app
  .get("/", (_, res) => {
    res.send("hello world");
  })
  .listen(process.env.PORT || 3000);
