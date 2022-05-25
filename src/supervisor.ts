const { MongoClient } = require("mongodb");
require("dotenv").config();
const client = new MongoClient(process.env.MONGO_URL);

console.log("Supervising!");

async function main() {
  await client.connect();
  console.log("Supervisor: Mongo connection succesful.");
  const db = client.db("FrontBase");
  console.log("Supervisor: Mongo connected");
  console.log("Supervisor: has nothing to do...");
}
main();
