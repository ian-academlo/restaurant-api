const express = require("express");

const PORT = 8000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto 8000");
});
