const express = require("express");
const app = express();
const { notFoundHandler, errorHandler } = require("../utility/error");

// ! use global middleware
app.use(require("../src/middlewares/global.middleware"));

// ! error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
