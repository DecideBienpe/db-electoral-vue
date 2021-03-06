// routes/resumenPartido.js

const express = require("express");
const router = express.Router();

const postsController = require("../controllers/resumenPartido2");

router.get("/", postsController.getAllResumenPartido2);

module.exports = router;
