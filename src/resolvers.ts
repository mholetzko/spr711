import { Context } from "./context";

import { Query, Resolver, Mutation, Arg, Ctx, Args } from "type-graphql";
import { FoodType, FoodInputArgs } from "./schema";

@Resolver((of) => FoodType)
export class FoodResolver {
  constructor() {}
  @Query((returns) => [FoodType])
  async food(@Ctx() ctx: Context) {
    await ctx.getDb();
    return ctx.db.collection("food").find().toArray();
  }

  @Query((returns) => [FoodType])
  async food_by_type(@Ctx() ctx: Context, @Arg("food_type") food_type: string) {
    await ctx.getDb();
    return ctx.db.collection("food").find({ type: food_type }).toArray();
  }

  @Query((returns) => [FoodType])
  async food_by_month(
    @Ctx() ctx: Context,
    @Arg("month", (type) => [String]) month: [string],
    @Arg("harvest", { defaultValue: true }) harvest: boolean
  ) {
    await ctx.getDb();
    if (harvest) {
      console.log(...month);
      return ctx.db
        .collection("food")
        .find({ harvest_season: { $all: month } })
        .toArray();
    } else {
      return ctx.db
        .collection("food")
        .find({ storage_season: { $all: month } })
        .toArray();
    }
  }

  @Mutation((returns) => String)
  async addFood(
    @Ctx() ctx: Context,
    @Args() { name, type, harvest_season, storage_season }: FoodInputArgs
  ) {
    await ctx.getDb();
  }

  @Mutation((returns) => [FoodType])
  async editFood(
    @Ctx() ctx: Context,
    @Args() { name, type, harvest_season, storage_season }: FoodInputArgs
  ) {
    await ctx.getDb();
  }

  @Mutation((returns) => [FoodType])
  async removeFood(
    @Ctx() ctx: Context,
    @Arg("name", (type) => [String]) name: [string]
  ) {
    await ctx.getDb();
  }
}
