// routes/congreso/candidatos.js

const express = require("express");
const router = express.Router();

const candidatosCController = require("../controllers/candidatosC");

router.get("/", candidatosCController.getAllCandidatos);

module.exports = router;
