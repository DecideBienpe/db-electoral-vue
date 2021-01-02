// controllers/posts.js
const db = require("../models");

// eslint-disable-next-line no-unused-vars
exports.getAllRegiones = async (req, res, next) => {
  let allRegiones = await db.Region.findAll({
    attributes: ["id", "region", "codigo", "quotas", "curul", "idOrgPol"]
  });
  const regex = /c\(/;
  const regex2 = /\)/;
  const regex3 = /([0-9]{0,})/gi;

  function parse(item) {
    if (item.dataValues.idOrgPol) {
      let matchesArray = [];
      const matches = item.dataValues.idOrgPol
        .replace(regex, "{")
        .replace(regex2, "}")
        .match(regex3);
      matches.forEach(element => {
        if (element) {
          matchesArray.push(element);
        }
      });
      item.dataValues.idOrgPol = matchesArray;
    }

    return item;
  }
  allRegiones = allRegiones.map(parse);

  res.status(200).send(allRegiones);
};
