const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/style/*.scss")]
    });
}

module.exports = {
  siteName: "Gridsome",
  siteDescription: "A WordPress starter for Gridsome",

  // templates: {
  //   WordPressArchive: [
  //     {
  //       path: "/blog/:year",
  //       component: "./src/templates/WordPressArchive.vue"
  //     }
  //   ]
  //   // adds route for "post_tag" post type (Optional)
  //   // post_month: "/blog/:year/:month/"
  // },
  plugins: [
    {
      use: "~/src/plugins/wp-source/",
      options: {
        baseUrl: "https:/wordpress.domain.here/", // required -
        typeName: "WordPress", // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: "/:year/:month/:day/:slug", //adds route for "post"  (Optional)
          post_tag: "/tag/:slug" // adds route for "post_tag" (Optional)
        },

        createPages: {
          // approach: "include", // include or exclude, default is include
          // list: ["test", "about", "sample-page"] //an array of page slugs to include or exclude, ex. ['about', 'our-team'], default is an empty array
          approach: "exclude", // include or exclude, default is include
          list: [] //an array of page slugs to include or exclude, ex. ['about', 'our-team'], default is an empty array
        }
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    }
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
