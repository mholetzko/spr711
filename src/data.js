const FoodTypes = {
  FRUITS: "fruits",
  GRAINS: "grains",
  SEEDS: "seeds",
  HERBS: "herbs",
  LEGUMES: "legumes",
  DAIRY: "dairy",
  EGGS: "eggs",
  VEGETABLES: "vegetables",
  FUNGI: "fungi",
};

const Food = [
  {
    name: "Carrot",
    type: FoodTypes.VEGETABLES,
    harvest_season: ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV"],
    storage_season: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAI",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
  },
  {
    name: "Potato",
    type: FoodTypes.VEGETABLES,
    harvest_season: ["JUN", "JUL", "AUG", "SEP", "OCT"],
    storage_season: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAI",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
  },
];

module.exports = {
  Food,
};
