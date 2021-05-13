const Users = [
  {
    id: 1,
    name: "Fikayo Adepoju",
    email: "fik4christ@yahoo.com",
    posts: [
      {
        id: 1,
        title: "Creating an Emoji Game with Vue, Auth0, and Google Vision API",
        published: true,
        link: "https://auth0.com/blog/creating-an-emoji-game-with-vue-auth0-and-google-vision-api/",
        author: 1,
      },
      {
        id: 2,
        title: "Electron Tutorial: Building Modern Desktop Apps with Vue.js",
        published: true,
        link: "https://auth0.com/blog/electron-tutorial-building-modern-desktop-apps-with-vue-js/",
        author: 1,
      },
      {
        id: 3,
        title: "State Management with Vuex: a Practical Tutorial",
        published: true,
        link: "https://auth0.com/blog/state-management-with-vuex-a-practical-tutorial/",
        author: 1,
      },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@company.com",
    posts: [
      {
        id: 4,
        title: "Build a CI powered RESTful API with Laravel",
        published: true,
        link: "https://circleci.com/blog/build-a-ci-powered-restful-api-with-laravel/",
        author: 2,
      },
      {
        id: 5,
        title: "Automate your Nuxt.js app deployment",
        published: true,
        link: "https://circleci.com/blog/automate-your-nuxt-js-app-deployment/",
        author: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Jane Paul",
    email: "jane@company.com",
    posts: [],
  },
];

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

const Months = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAI: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
};

const Food = [
  {
    name: "Carrot",
    type: FoodTypes.VEGETABLES,
    harvestSeason: [
      Months.JUN,
      Months.JUL,
      Months.AUG,
      Months.SEP,
      Months.OCT,
      Months.NOV,
    ],
    storageSeason: [
      Months.JAN,
      Months.FEB,
      Months.MAR,
      Months.APRIL,
      Months.MAI,
      Months.JUN,
      Months.JUL,
      Months.AUG,
      Months.SEP,
      Months.OCT,
      Months.NOV,
      Months.DEC,
    ],
  },
  {
    name: "Potato",
    type: FoodTypes.VEGETABLES,
    harvestSeason: [Months.JUN, Months.JUL, Months.AUG, Months.SEP, Months.OCT],
    storageSeason: [
      Months.JAN,
      Months.FEB,
      Months.MAR,
      Months.APRIL,
      Months.MAI,
      Months.JUN,
      Months.JUL,
      Months.AUG,
      Months.SEP,
      Months.OCT,
      Months.NOV,
      Months.DEC,
    ],
  },
];

module.exports = {
  Users,
  Food,
};
