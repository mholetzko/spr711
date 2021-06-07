import "reflect-metadata";
import cors from "cors";
import * as path from "path";
import { buildSchema } from "type-graphql";
import express from "express";
const { graphqlHTTP } = require("express-graphql");
//const schema = require("./src/schema");
//const resolvers = require("./src/resolvers");
import { FoodResolver } from "./src/resolvers";
import { context } from "./src/context";

import expressPlayground from "graphql-playground-middleware-express";

async function bootstrap() {
  const ctx = new context();

  const app = express();
  const schema = await buildSchema({
    resolvers: [FoodResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  console.log(schema);
  app.use(cors());
  app.use(
    "/srp_api",
    graphqlHTTP({
      schema: schema,
      context: ctx,
      graphiql: true,
    })
  );

  //Graphql Playground route
  app.get("/playground", expressPlayground({ endpoint: "/srp_api" }));

  const port = process.env.PORT || "4000";

  app.listen(port);

  console.log(`🚀 Server ready at http://localhost:4000/srp_api`);
  console.log(`🚀 Playground at http://localhost:4000/playground`);
}

bootstrap();
