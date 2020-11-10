module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  collectCoverageFrom: ["src/frontend/**/*.{js,jsx}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/frontend/build/",
    "<rootDir>/src/frontend/dist/",
    "<rootDir>/src/frontend/out/",
    "<rootDir>/src/frontend/public/",
    "<rootDir>/src/frontend/node_modules/",
    "<rootDir>/src/frontend/.next/",
  ],
  testMatch: ["<rootDir>/src/frontend/**/*test.{js,jsx}"],
  testResultsProcessor: "jest-sonar-reporter",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$":
      "<rootDir>/src/frontend/helpers/__mocks__/fileMock.js",
    "\\.module\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
