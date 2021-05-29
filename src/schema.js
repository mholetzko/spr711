const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        food_by_month(month:[String!],!harvest: Boolean!):[Food]
        food:[Food]
        food_by_type(food_type:String!):[Food]
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
