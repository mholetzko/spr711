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
    let collectionContent: [] = await database
      .collection("food")
      .find()
      .toArray();
    console.log(collectionContent);
    if (collectionContent.length === 0) {
      await database.collection("food").insertMany(data.Food);
      console.log(" #### Inserted ####");
    } else {
      console.log(" #### No pre insertion required ####");
    }
  } else {
    console.log("... database object exists");
  }

  return database;
}

export { startDatabase };
