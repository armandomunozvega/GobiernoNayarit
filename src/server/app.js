// Dependencies
const express = require("express");
const next = require("next");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const { resolve, join } = require("path");
const fs = require("fs");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

// Next JS
const nextDir = resolve(__dirname, "./../frontend");
const app = next({ dev, dir: nextDir });
const handle = app.getRequestHandler();

// Logger
const LOGGER = require("./utils/Logger").Logger;

app.prepare().then(() => {
  // Express
  const server = express();

  // Helmet
  // TODO: configure contentSecurityPolicy directives
  server.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );

  // Disabling x-powered-by
  server.disable("x-powered-by");

  // Middlewares
  server.use(bodyParser.json());
  server.use(cors());

  const routerAuth = express.Router();
  const routerApi = express.Router();

  server.use("/auth", routerAuth);
  server.use("/api", routerApi);

  routerAuth.use((req, res, _next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    _next();
  });

  fs.readdirSync(join(__dirname, ".", "routes/auth/")).forEach((file) => {
    require(`./routes/auth/${file}`)(routerAuth) // eslint-disable-line
  });

  // eslint-disable-next-line consistent-return
  routerApi.use((req, res, _next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Set-Cookie"
    );

    if (req.method !== "OPTIONS") {
      if (req.get("authorization")) {
        req.body.token = req.get("authorization");
        req.body.idUser = req.get("uid");
        _next();
      } else {
        return res.status(403).send({
          codigoError: 403,
          message: "No Authorization provided.",
        });
      }
    } else {
      _next();
    }
  });

  fs.readdirSync(join(__dirname, ".", "routes/api/")).forEach((pathRoute) => {
    fs.readdirSync(join(__dirname, ".", `routes/api/${pathRoute}`)).forEach(
      (file) => {
        require(`./routes/api/${pathRoute}/${file}`)(routerApi); // eslint-disable-line global-require, import/no-dynamic-require
      }
    );
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    LOGGER("INFO", `Node server running on port ${port}`);
  });
});
