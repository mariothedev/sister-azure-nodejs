const axios = require("axios");
const app = require("express")();
require("dotenv").config();

app
  .get("/", async (_, res) => {
    // Make a request for a user with a given ID
    axios
      .get("https://api.nationalize.io?name=mario")
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        res.send("Problem");
      });
  })
  .listen(process.env.PORT || 3000);
