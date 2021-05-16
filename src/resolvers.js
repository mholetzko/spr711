const resolvers = {
  month: async ({ harvest }, context) => {
    const { db } = await context();
    return db.collection("food").findOne("Carrot").toArray();
  },
  food: async (_, context) => {
    const { db } = await context();
    return db.collection("food").find().toArray();
  },
  food_by_type: async ({ type }, context) => {
    const { db } = await context();
    return db.collection("food").find().toArray();
  },
  //Mutation resolvers
  addFood: async ({ name, type, harvest_season, storage_season }, context) => {
    const { db } = await context();

    return db
      .collection("food")
      .insertOne(
        { name },
        { $set: { type, harvest_season, storage_season } },
        { returnOriginal: false }
      )
      .then((resp) => String(resp));
  }, //Mutation resolvers
  editFood: async ({ name, type, harvest_season, storage_season }, context) => {
    const { db } = await context();

    return db
      .collection("food")
      .findOneAndUpdate(
        { name },
        { $set: { type, harvest_season, storage_season } },
        { returnOriginal: false }
      )
      .then((resp) => resp.value);
  },
  removeFood: async ({ name }, context) => {
    const { db } = await context();

    return db
      .collection("food")
      .findOneAndDelete({ name })
      .then((resp) => resp.value);
  },
};

module.exports = resolvers;
