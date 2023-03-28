const express = require("express");
const ApiRoutes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

ApiRoutes(app);

app.use((error, req, res, next) => {
  res.status(400).json(error);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
