const { MongoClient } = require("mongodb");
const fs = require("fs");

let db;

async function connectToDatabase() {
  if (db) return db;

  const config = JSON.parse(fs.readFileSync("./dbConfig.json", "utf8"));
  const client = new MongoClient(config.mongoUri);
  await client.connect();

  db = client.db(config.dbName);
  return db;
}

function getDb() {
  if (!db) throw new Error("Database not connected");
  return db;
}

module.exports = { connectToDatabase, getDb };
