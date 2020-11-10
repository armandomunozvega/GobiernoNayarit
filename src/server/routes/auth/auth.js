const { doRequestRest } = require("../../utils/HTTPRequest");
const LOGGER = require("../../utils/Logger").Logger;
const CONFIG = require("../../config");

module.exports = (router) => {
  const { LOGGER_AUTH } = CONFIG;
  const SERVICE = CONFIG.SERVICE_AUTH;

  const serviceHandler = (config, map) => (req, res) => {
    const data = req.body;

    const headers = {};

    const body = map ? map(data) : data;

    let { path } = config;

    if (config.name === "user") {
      path = `${path}/${body.userId}`;
      delete body.userId;
    }

    doRequestRest(
      config.protocol,
      config.host,
      config.port,
      path,
      config.method,
      headers,
      body,
      ({ status, response }) => {
        const responseJSON = JSON.parse(response);

        responseJSON.message = "Operacion Exitosa";

        LOGGER("INFO", `${config.name} : Exitoso`, LOGGER_AUTH);
        return res.status(status).send(responseJSON);
      },
      ({ status, error }) => {
        LOGGER("ERROR", error, LOGGER_AUTH);
        return res.status(status).send(JSON.parse(error));
      }
    );
  };

  const login = serviceHandler(
    {
      name: "login",
      protocol: SERVICE.PROTOCOL,
      host: SERVICE.HOST,
      port: SERVICE.PORT,
      path: SERVICE.PATH,
      method: CONFIG.METHOD_POST,
    },
    (data) => {
      return data;
    }
  );

  const user = serviceHandler(
    {
      name: "user",
      protocol: SERVICE.PROTOCOL,
      host: SERVICE.HOST,
      port: SERVICE.PORT,
      path: SERVICE.PATH_USER,
      method: CONFIG.METHOD_GET,
    },
    (data) => {
      return data;
    }
  );

  // Link routes and functions
  router.post("/login", login);
  router.post("/user", user);
};
