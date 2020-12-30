// controllers/candidatosC.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllCandidatos = async (req, res, next) => {
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
      "idOrgPol"
    ]
  });
  res.status(200).send(allCandidatos);
};
