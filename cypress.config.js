const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   // baseUrl: 'http://localhost:50415',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}"
  },
});
