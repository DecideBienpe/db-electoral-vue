// controllers/posts.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllRegions = async (req, res, next) => {
  const allRegions = await db.Region.findAll({
    attributes: ["id", "region", "codigo", "quotas", "curul"]
  });
  res.status(200).send(allRegions);
};
