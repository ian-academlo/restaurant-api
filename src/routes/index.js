const tablesRoutes = require("./tables.routes");
const userRoutes = require("./user.routes");

const ApiRoutes = (app) => {
  app.use("/api/v1", tablesRoutes);
  app.use("/api/v1", userRoutes);
};

module.exports = ApiRoutes;
