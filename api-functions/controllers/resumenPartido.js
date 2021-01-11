// controllers/posts.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllResumenPartido = async (req, res, next) => {
  const allResumenes = await db.ResumenPartido.findAll({
    attributes: [
      "Partido",
      "PromedioEdad",
      "PromedioIngr",
      "Pmujeres",
      "PEstudios",
      "PExperiencia",
      "Joven",
      "Mayor",
      "Vacancia",
      "TipoDemocracia"
    ]
  });
  res.status(200).send(allResumenes);
};
