const tablesRoutes = require("./tables.routes");

const ApiRoutes = (app) => {
  app.use("/api/v1", tablesRoutes);
};

module.exports = ApiRoutes;
