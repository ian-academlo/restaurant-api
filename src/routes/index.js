const tablesRoutes = require("./tables.routes");
const userRoutes = require("./user.routes");
const ordersRoutes = require("./orders.routes");

const ApiRoutes = (app) => {
  app.use("/api/v1", tablesRoutes);
  app.use("/api/v1", userRoutes);
  app.use("/api/v1", ordersRoutes);
};

module.exports = ApiRoutes;
