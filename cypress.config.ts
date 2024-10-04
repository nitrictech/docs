import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // require("cypress-fail-fast/plugin")(on, config);
      return config
    },
  },
})
