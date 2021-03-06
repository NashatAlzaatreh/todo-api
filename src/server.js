"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
require("dotenv").config();
// const { users } = require("./models/users");

const PORT = process.env.PORT || 5648;

const authRouter = require("./routes/auth.routes");
const v1Router = require("./routes/v1.route.");
const routerV2 = require("./routes/v2.routes");

// const rentRouter = require("./routes/rent");

const notFoundHandler = require("./error-handlers/404.js");
const errorHandler = require("./error-handlers/500.js");
// const logger = require('./models/logger.js',,,);

const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(logger);

app.use(authRouter);
app.use("/api/v1", v1Router);
app.use("/api/v2", routerV2);

// app.use(rentRouter);

app.get("/erro", (req, res) => {
  throw new Error("Error");
});
// app.use("*", notFoundHandler);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
  });
}

module.exports = {
  start,
  app,
};
