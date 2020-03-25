const express = require("express");

const route = express.Router();

const OngController = require("./controllers/OngController");

route.get("/ongs", OngController.index);
route.post("/ongs", OngController.store);

module.exports = route;
