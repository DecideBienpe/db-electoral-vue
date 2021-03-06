// controllers/posts.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllResumenPartido2 = async (req, res, next) => {
  const allResumenes2 = await db.ResumenPartido2.findAll({
    attributes: [
      "Partido",
      "Sentencia",
      "DeudoresSunat",
      "Golondrinos",
      "Vacunado"
    ]
  });
  res.status(200).send(allResumenes2);
};
