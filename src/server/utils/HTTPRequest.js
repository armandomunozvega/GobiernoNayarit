// Dependencies
const http = require("http");
const https = require("https");
const querystring = require("querystring");

const HANDLER = require("./ErrorHandler").handler;
const LOGGER = require("./Logger").Logger;
const CONFIG = require("../config");

const { LOGGER_REQUEST } = CONFIG;

module.exports.doRequestRest = (
  protocol,
  host,
  port,
  endpoint,
  method,
  headers,
  body,
  onSuccess,
  onError
) => {
  let dataString;

  const options = {
    protocol,
    host,
    port,
    path: endpoint,
    method,
    headers,
    query: dataString,
  };

  let link;

  if (protocol === "https:") {
    options.requestCert = true;
    options.rejectUnauthorized = false;
    link = https;
  } else {
    link = http;
  }

  switch (method) {
    case "GET":
      dataString = querystring.stringify(body);
      options.path = `${options.path}?${dataString}`;
      break;
    case "DELETE":
      dataString = "";
      options.path = `${options.path}${body.idDelete}`;
      break;
    default:
      dataString = JSON.stringify(body);
      options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
        "Content-Length": dataString.length,
      };
  }

  LOGGER("DEBUG", `OPTIONS: ${JSON.stringify(options)}`, LOGGER_REQUEST);

  LOGGER("DEBUG", `BODY: ${dataString}`, LOGGER_REQUEST);

  const req = link.request(options, (res) => {
    res.setEncoding("utf8");
    let responseString = "";

    res.on("data", (chunk) => {
      responseString += chunk;
    });

    res.on("end", () => {
      LOGGER("DEBUG", `RESPONSE: ${responseString}`, LOGGER_REQUEST);

      if (res.statusCode >= 200 && res.statusCode < 300) {
        onSuccess({ status: res.statusCode, response: responseString });
      } else {
        onError({ status: res.statusCode, error: responseString });
      }
    });
  });

  if (method !== "GET") {
    req.write(dataString);
  }

  req.on("error", (e) => {
    HANDLER(e);
    onError(JSON.stringify(e));
  });
  req.end();
};

module.exports.doRequestRestURLEncoded = (
  protocol,
  host,
  port,
  endpoint,
  method,
  headers,
  body,
  onSuccess,
  onError
) => {
  const data = querystring.stringify(body);

  const options = {
    protocol,
    host,
    port,
    path: endpoint,
    method,
    headers,
  };

  let link;

  if (protocol === "https:") {
    options.requestCert = true;
    options.rejectUnauthorized = false;

    link = https;
  } else {
    link = http;
  }

  LOGGER("DEBUG", `OPTIONS: ${JSON.stringify(options)}`, LOGGER_REQUEST);

  LOGGER("DEBUG", `BODY: ${data}`, LOGGER_REQUEST);

  const req = link.request(options, (res) => {
    res.setEncoding("utf8");
    let responseString = "";

    res.on("data", (chunk) => {
      responseString += chunk;
    });

    res.on("end", () => {
      LOGGER("DEBUG", `RESPONSE: ${responseString}`, LOGGER_REQUEST);

      if (res.statusCode >= 200 && res.statusCode < 300) {
        onSuccess({ status: res.statusCode, response: responseString });
      } else {
        onError({ status: res.statusCode, error: responseString });
      }
    });
  });

  req.write(data);
  req.on("error", (e) => {
    HANDLER(e);
    onError(e);
  });
  req.end();
};
