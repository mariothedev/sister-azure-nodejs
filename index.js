const app = require("express")();
const { MongoClient } = require("mongodb");
require("dotenv").config();

app
  .get("/", (_, res) => {
    // Connection URI
    const uri =
      "mongodb://sandbox-mongodb-azure:eQC7r1lLtMvw5agzIMYvBRe0OiiefvGj6S9yYPZAQbOl2aJFFZREOsbsQmFkLwinAYikLftXtEJgACDblH2DAg==@sandbox-mongodb-azure.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sandbox-mongodb-azure@";
    // Create a new MongoClient
    const client = new MongoClient(uri);
    async function run() {
      try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        const d = new Date();
        let time = d.getTime();
        res.send(`Connected successfully to server ${time}`);
      } catch {
        res.send("problem connecting to server");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
  })
  .listen(process.env.PORT || 3000);
