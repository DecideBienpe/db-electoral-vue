"use strict";
const { Model } = require("sequelize");
module.exports = sequelize => {
  class ResumenPartido2 extends Model {
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
  ResumenPartido2.init(
    {},
    {
      sequelize,
      modelName: "ResumenPartido2",
      tableName: "ResumenPartido2"
    }
  );
  return ResumenPartido2;
};
