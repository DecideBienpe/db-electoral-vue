// controllers/candidatosC.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllCandidatos = async (req, res, next) => {
  const allCandidatos = await db.CandidatoCongreso.findAll({
    attributes: [
      "ID",
      "Region",
      "Nombre",
      ["Número", "Numero"], // Cambio de nombre para evitar problemas de parsing
      "Designado",
      "Sexo",
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
