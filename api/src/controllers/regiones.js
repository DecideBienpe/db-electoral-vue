// controllers/posts.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllRegiones = async (req, res, next) => {
  const allRegiones = await db.Region.findAll({
    attributes: ["id", "region", "codigo", "quotas", "curul"]
  });
  res.status(200).send(allRegiones);
};
