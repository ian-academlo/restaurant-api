const { users } = require("../models");

const auth = async (req, res, next) => {
  // * tenia la informacion del usuario
  // recibimos un id
  // una peticion para obtener la informacion del usuairo
  try {
    const { id } = req.body;
    const user = await users.findByPk(id);

    if (!user) {
      return next({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
