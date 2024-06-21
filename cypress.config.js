const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 35000,
  pageLoadTimeout: 90000,
  responseTimeout: 10000,
  requestTimeout: 10000,
  video: false,
  e2e: {
    baseUrl:"https://rozetka.com.ua/ua",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
