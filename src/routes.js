const express = require("express");

const route = express.Router();

route.get("/", (request, response) => response.send("Ok"));

module.exports = route;
