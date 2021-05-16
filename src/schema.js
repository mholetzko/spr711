const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        month(harvest: Boolean!):[Food]
        food:[Food]
        food_by_type(type:String!):[Food]
    }

    type Mutation {
        addFood(name: String!, type: String!, harvest_season: [String!]!, storage_season:[String!]!): String!
        removeFood(name: String!): Food!
        editFood(name: String!, type: String!, harvest_season: [String!]!, storage_season:[String!]!): Food!
    }

    type Food {
        name: String!
        type: String!
        harvest_season: [String]
        storage_season: [String]
    }
`);

module.exports = schema;
