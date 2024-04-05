const express = require("express");
const app = express();

// ! use global middleware
app.use(require("../src/middlewares/global.middleware"));

module.exports = app;
