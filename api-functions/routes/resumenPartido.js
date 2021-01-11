// routes/resumenPartido.js

const express = require("express");
const router = express.Router();

const postsController = require("../controllers/resumenPartido");

router.get("/", postsController.getAllResumenPartido);

module.exports = router;
