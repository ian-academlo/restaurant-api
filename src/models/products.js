"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.hasMany(models.order_details, { foreignKey: "productId" });
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      img: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
