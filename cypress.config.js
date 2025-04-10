const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.automationexercise.com/",
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    viewportHeight: 800,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
        return config
    },
  },
});
