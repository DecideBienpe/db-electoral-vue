// controllers/candidatosC.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllCandidatos = async (req, res, next) => {
  let whereStatement = {};
  let region = req.query.region;

  if (region) {
    whereStatement.Region = region.toUpperCase();
  }

  const allCandidatos = await db.CandidatoCongreso.findAll({
    attributes: [
      "ID",
      "Region",
      "Nombre",
      "Numero",
      "Designado",
      "Sexo",
      "Pmujeres",
      "Edad",
      "Partido",
      "idHojaVida",
      "Estudios",
      "FlagS",
      "Sentencia",
      "FlagE",
      "Experiencia",
      "VotoMV",
      "TipoDemocracia",
      "Vacancia",
      "CabezaD",
      "Cod",
      "FlagSP",
      "DI",
      "idOrgPol",
      "vgate"
    ],
    where: whereStatement
  });
  res.status(200).send(allCandidatos);
};
