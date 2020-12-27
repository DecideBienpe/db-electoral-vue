// routes/posts.js

const express = require("express");
const router = express.Router();

const postsController = require("../controllers/partidos");

router.get("/", postsController.getAllPartidos);

module.exports = router;
