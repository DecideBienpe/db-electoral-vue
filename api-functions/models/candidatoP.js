"use strict";
const { Model } = require("sequelize");
module.exports = sequelize => {
  class CandidatoPresidente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  CandidatoPresidente.init(
    {},
    {
      sequelize,
      modelName: "CandidatoPresidente",
      tableName: "presidencial"
    }
  );
  return CandidatoPresidente;
};
