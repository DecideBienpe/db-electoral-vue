// routes/posts.js

const express = require("express");
const router = express.Router();

const postsController = require("../controllers/regiones");

router.get("/", postsController.getAllRegiones);

module.exports = router;
