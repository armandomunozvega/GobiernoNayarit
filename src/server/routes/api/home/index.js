const { doRequestRest } = require("../../../utils/HTTPRequest");
const LOGGER = require("../../../utils/Logger").Logger;
const CONFIG = require("../../../config");

module.exports = (router) => {
  const { LOGGER_HOME } = CONFIG;
  const SERVICE = CONFIG.SERVICE_HOME;

  const serviceHandler = (config, map) => (req, res) => {
    const data = req.body;

    const headers = {};

    const body = map ? map(data) : data;

    doRequestRest(
      config.protocol,
      config.host,
      config.port,
      config.path,
      config.method,
      headers,
      body,
      ({ status, response }) => {
        const responseJSON = JSON.parse(response);

        responseJSON.message = "Operacion Exitosa";

        LOGGER("INFO", `${config.name} : Exitoso`, LOGGER_HOME);
        return res.status(status).send(responseJSON);
      },
      ({ status, error }) => {
        LOGGER("ERROR", error, LOGGER_HOME);
        return res.status(status).send(JSON.parse(error));
      }
    );
  };

  const list = serviceHandler(
    {
      name: "list",
      protocol: SERVICE.PROTOCOL,
      host: SERVICE.HOST,
      port: SERVICE.PORT,
      path: SERVICE.PATH,
      method: CONFIG.METHOD_GET,
    },
    (data) => {
      return data;
    }
  );

  // Link routes and functions
  router.post("/list", list);
};
