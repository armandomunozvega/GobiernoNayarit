/* const [PROTOCOL_AUTH, HOST_AUTH, PORT_AUTH] = process.env.BACKEND_AUTH.split(
  "#"
); */
const [PROTOCOL_AUTH, HOST_AUTH, PORT_AUTH] = "https:#reqres.in#".split("#");
module.exports = {
  LEVEL_LOG:
    process.env.LEVEL_LOG === undefined ? "TRACE" : process.env.LEVEL_LOG,

  BASIC: "Basic ",
  BEARER: "Bearer ",

  CATEGORIES: ["App", "Utils.HTTPRequest", "Routes.Auth", "Routes.Home"],

  LOGGER_DEFAULT: 0,
  LOGGER_REQUEST: 1,
  LOGGER_AUTH: 2,
  LOGGER_HOME: 3,

  METHOD_POST: "POST",
  METHOD_GET: "GET",
  METHOD_PUT: "PUT",
  METHOD_DELETE: "DELETE",

  SERVICE_AUTH: {
    PROTOCOL: PROTOCOL_AUTH,
    HOST: HOST_AUTH,
    PORT: PORT_AUTH,
    PATH: "/api/login",
    PATH_USER: "/api/users",
  },
  SERVICE_HOME: {
    PROTOCOL: PROTOCOL_AUTH,
    HOST: HOST_AUTH,
    PORT: PORT_AUTH,
    PATH: "/api/unknown",
  },
};
