const express = require("express");

const route = express.Router();

const OngController = require("./controllers/OngController");
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

route.get("/ongs", OngController.index);
route.post("/ongs", OngController.store);
route.get("/profiles", ProfileController.index);
route.get("/incidents", IncidentController.index);
route.post("/incidents", IncidentController.store);
route.delete("/incidents/:id", IncidentController.destroy);

module.exports = route;
