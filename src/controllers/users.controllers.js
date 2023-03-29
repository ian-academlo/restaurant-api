const UserServices = require("../services/users.services");

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    await UserServices.add(userData);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
