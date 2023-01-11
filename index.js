const axios = require("axios");
const app = require("express")();
const bodyParser = require("body-parser");
require("dotenv").config();

app
  .use(bodyParser.json())
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
  .post("/webhook", async (_, res) => {
    axios
      .post(
        "https://hooks.slack.com/services/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",
        {
          text: "testing: please ignore",
        }
      )
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
