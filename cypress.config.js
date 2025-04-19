const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7ybv67",
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  experimentalWebKitSupport: true,

  e2e: {
    setupNodeEvents(on, config) {
    
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      tomestap: "mmddyyyy_HHMMss" }
  },
});
