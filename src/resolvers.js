const resolvers = {
  food_by_month: async ({ month, harvest }, context) => {
    const { db } = await context();
    if (harvest) {
      return db
        .collection("food")
        .find({ harvest_season: [...month] })
        .toArray();
    } else {
      return db
        .collection("food")
        .find({ storage_season: [...month] })
        .toArray();
    }
  },
  food: async (_, context) => {
    const { db } = await context();
    return db.collection("food").find().toArray();
  },
  food_by_type: async ({ foodType }, context) => {
    const { db } = await context();
    return db.collection("food").find({ type: foodType }).toArray();
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
