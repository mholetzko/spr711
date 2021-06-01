import { Context } from "./context";

import { Query, Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { FoodType } from "./schema";

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
    @Arg("harvest") harvest: boolean
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
}
