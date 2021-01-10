// controllers/posts.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllPartidos = async (req, res, next) => {
  const allPartidos = await db.Partido.findAll({
    attributes: ["IDPartido", "Partido", "Imagen"]
  });
  res.status(200).send(allPartidos);
};
