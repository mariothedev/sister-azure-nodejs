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
        res.send(JSON.stringify(new Date().toUTCString()));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })
  .post("/webhook", async (_, res) => {
    axios
      .post(
        "https://hooks.slack.com/services/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",
        {
          text: `testing: please ignore ${new Date().toUTCString()}`,
        }
      )
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(new Date().toUTCString()));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })

  .listen(process.env.PORT || 3000);
