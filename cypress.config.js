const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    baseUrl: 'http://127.0.0.1:5500',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});