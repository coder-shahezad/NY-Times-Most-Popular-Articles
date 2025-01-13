# NY Times Popular Articles

This template provides a minimal setup to integrate **React** with **Vite**, complete with **Hot Module Replacement (HMR)** and **ESLint** rules for best practices.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Unit Tests](#running-unit-tests)
- [Test Coverage](#test-coverage)
- [Running Component UI Testing](#running-component-ui-testing)

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

This will install all the required packages listed in the `package.json` file.

## Running the Application

To start the development server and run the application, use the following command:

```bash
npm run dev
```

This will start the React app with Vite, enabling Hot Module Replacement (HMR) for faster development.

## Running Unit Tests

To run the unit tests using Jest, execute the following command:

```bash
npm run test
```

This will run all the unit test cases defined in the project and output the results to the terminal.

## Test Coverage

To generate a code coverage report for the unit tests, run the following command:

```bash
npm run test:coverage
```

This will provide a detailed test coverage report showing how much of the code is covered by unit tests.

## Build the Project from the Command-Line

To create a build of your project that can be deployed, use the following script:

```bash
npm run build
```

This will generate the production-ready files in the `dist/` directory.

## Run Static Code Analysis (Linting)

To ensure your code follows best practices, run the linting script to analyze your code for style issues and errors:

```bash
npm run lint
```

## Running Cypress Component UI Testing

To run the cypress component unit tests, execute the following command:

```bash
npm run cy:open-unit
```

This will run all the unit test cases defined in the project and output the results to the terminal.

### Explanation of Scripts:

- **`npm install`:** This script will install all the required packages listed in the `package.json` file.
- **`npm run dev`:** This script uses Vite start the development server and run the application.
- **`npm run build`:** This script uses Vite to bundle the application for production.
- **`npm run lint`:** Runs ESLint on your codebase to ensure it adheres to the defined style guide.
- **`npm run test`:** Runs unit tests using Jest.
- **`npm run test:coverage`:** Runs Jest and also collects code coverage data.
- **`npm run cy:open-unit`:** Runs cypress component UI tests.
