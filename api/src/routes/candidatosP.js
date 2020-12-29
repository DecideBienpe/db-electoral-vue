// routes/presidente/candidatos.js

const express = require("express");
const router = express.Router();

const candidatosPController = require("../controllers/candidatosP");

router.get("/", candidatosPController.getAllCandidatos);

module.exports = router;
