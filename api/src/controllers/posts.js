// controllers/posts.js
const db = require('../models')

exports.getAllPosts = async (req, res, next) => {
    const allPosts = await db.Post.findAll({
        attributes: ['id', 'title', 'content'],
    })
    res.status(200).send(allPosts)
}