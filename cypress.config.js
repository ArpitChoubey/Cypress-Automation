const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'odoiwb',
  reporter: "cypress-mochawesome-reporter", // for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require("cypress-mochawesome-reporter/plugin")(on); // for reports
    },
  },
});
