// Set the NODE_ENV to test
process.env.NODE_ENV = "jest";

// Requiring jest
const jest = require("jest");

// Getting the arguments from the terminal
const argv = process.argv.slice(2);

// Running Jest passing the arguments
jest.run(argv);
