const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");

const route = express.Router();

route.get("/ongs", async (request, response) => {
  const ongs = await connection("ongs").select("*");

  return response.json(ongs);
});

route.post("/ongs", async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;
  const id = crypto.randomBytes(4).toString("HEX");

  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  response.json({ id });
});

module.exports = route;
