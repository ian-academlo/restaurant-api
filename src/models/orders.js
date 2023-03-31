"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.hasMany(models.order_details, { foreignKey: "orderId" });
      orders.belongsTo(models.Table, { foreignKey: "tableId" });
      orders.belongsTo(models.users, { foreignKey: "userId" });
    }
  }
  orders.init(
    {
      table_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      total: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "orders",
    }
  );
  return orders;
};
