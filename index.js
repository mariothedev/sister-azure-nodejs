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
  .get("/api/e", async (_, res) => {
    axios
      .get("0.0.0.0/api")
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })
  .get("/api/d", async (_, res) => {
    axios
      .get("https://frontdesk.azurewebsites.net/api")
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })
  .get("/api/c", async (_, res) => {
    axios
      .get("http://10.10.0.4/api")
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })
  .get("/api/b", async (_, res) => {
    axios
      .get("https://10.10.0.4/api")
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })
  .get("/api/a", async (_, res) => {
    axios
      .get("10.10.0.4/api")
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })

  .post("/webhook", async (_, res) => {
    axios
      .post(process.env.SLACK_URL, {
        text: `testing: please ignore ${new Date().toUTCString()}`,
      })
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
