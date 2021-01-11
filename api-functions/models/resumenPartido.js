"use strict";
const { Model } = require("sequelize");
module.exports = sequelize => {
  class ResumenPartido extends Model {
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
  ResumenPartido.init(
    {},
    {
      sequelize,
      modelName: "ResumenPartido",
      tableName: "ResumenPartido"
    }
  );
  return ResumenPartido;
};
