const { users } = require("../models");

const auth = async (req, res, next) => {
  // * tenia la informacion del usuario
  // recibimos un id
  // una peticion para obtener la informacion del usuairo
  try {
    const { token } = req.headers;
    // validamoss token jwt.verify
    // { ... }
    const user = await users.findByPk(token);

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
