const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth:1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
