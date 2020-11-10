module.exports = "test-file-stub";

jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    API_URL: "http://localhost:3000",
  },
}));
