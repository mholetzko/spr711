import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType({ description: "Object representing a food item" })
export class FoodType {
  @Field()
  name: string;

  @Field()
  type: string;

  @Field((type) => [String])
  harvest_season: [string];

  @Field((type) => [String])
  storage_season: [string];
}
