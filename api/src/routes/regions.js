// routes/posts.js

const express = require('express')
const router = express.Router()

const postsController = require('../controllers/regions')

router.get('/', postsController.getAllRegions)

module.exports = router