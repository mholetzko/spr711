import { MongoClient } from "mongodb";
import * as data from "./data";

let database: any = null;
const mongoDbUri: string = String(process.env.MONGODB_URI);
console.log(mongoDbUri);
async function startDatabase() {
  const connection = await MongoClient.connect(mongoDbUri, {
    useNewUrlParser: true,
  });

  //Seed Database
  if (!database) {
    database = connection.db();
    let dbContent: [any] = database.collection("food").find().toArray();
    if (dbContent.length > 0) {
      //preset the db, otherwise just get the connection
      await database.collection("food").insertMany(data.Food);
    }
  }
  return database;
}

export { startDatabase };
