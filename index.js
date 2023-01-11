const app = require("express")();
require("dotenv").config();

app
  .get("/", (_, res) => {
    res.send("hello world 2.0");
  })
  .listen(process.env.PORT || 3000);
