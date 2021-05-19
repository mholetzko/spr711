const { MongoClient } = require("mongodb");
const data = require("./data");

let database = null;
const mongoDbUri = process.env.MONGODB_URI;

async function startDatabase() {
  const connection = await MongoClient.connect(mongoDbUri, {
    useNewUrlParser: true,
  });

  //Seed Database
  if (!database) {
    database = connection.db();
    await database.collection("food").insertMany(data.Food);
  }

  return database;
}

module.exports = startDatabase;
