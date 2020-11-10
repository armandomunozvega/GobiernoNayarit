const _ = require("underscore");
const path = require("path");
const fs = require("fs");

const env = process.env.NODE_ENV || "development";

let base = {
  env,
  port: parseInt(process.env.PORT, 10) || 3000,
  isDev: env === "development",
  isTest: env === "test",
};

const envConfig = require(`./${env}.json`); // eslint-disable-line import/no-dynamic-require

base = _.union(base, envConfig || {});

const loadLocalConfig = (name) => {
  const localConfigPath = path.join(__dirname, name);
  if (fs.existsSync(localConfigPath)) {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    base = _.union(base, require(localConfigPath));
    console.log(`loaded ${localConfigPath} config`); // eslint-disable-line no-console
  }
};

// local file can be used to customize any config values during development
if (base.env === "test") {
  loadLocalConfig("test-local.js");
} else {
  loadLocalConfig("local.js");
}
module.exports = base;
