const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
require("dotenv").config();

console.log("Supervising!");

async function main() {
  await client.connect();
  console.log("Supervisor: Mongo connection succesful.");
  const db = client.db("FrontBase");
  console.log("Supervisor: Mongo connected");
  console.log("Supervisor: has nothing to do...");
}
main();
