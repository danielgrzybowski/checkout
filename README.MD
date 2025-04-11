# Cypress Test Suite

This project contains automated end-to-end tests using Cypress - (https://www.cypress.io/).

## Prerequisites

Make sure you have **Node.js** (preferably version 20) and **npm** (version 9 or higher) installed on your system. You can verify the installed versions by running `node -v` and `npm -v` in your terminal.

## Installation & Usage

Before running the tests, install all necessary dependencies. Run `npm install` in the project directory.

Please populate credentials in cypress/fixtures/loginData.json, as they are not provided in the repository.

Tests can be run in two different modes:

- **Interactive mode (with UI):** Run `npm run cypress-open` to open the Cypress in a graphical interface.
- **Headless mode:** Run `npm run cypress-run` to execute all tests in headless mode, using the default Electron browser.

If you want to use a different browser (chrome, firefox or edge) in headless mode, make sure it is installed on your system and replace `electron` with the name of your preferred browser.