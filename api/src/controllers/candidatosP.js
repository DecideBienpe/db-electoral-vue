// controllers/candidatosP.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllCandidatos = async (req, res, next) => {
  const allCandidatos = await db.CandidatoPresidente.findAll({
    attributes: [
      "ID",
      "Partido",
      "Nombre",
      "Edad",
      "Sexo",
      "idHojaVida",
      ["cargo", "Cargo"],
      "FlagS",
      "Sentencia",
      "Estudios",
      "FlagEs",
      "VotoMV",
      "TipoDemocracia",
      "DenInv",
      "Vacancia",
      "DI",
      "InvFiscal",
      "FlagE",
      "Experiencia",
      "Escazu",
      "VotoEscazu",
      "FlagSP"
      "idOrgPol"
    ]
  });
  res.status(200).send(allCandidatos);
};
