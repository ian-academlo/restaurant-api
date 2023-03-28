const TableServices = require("../services/tables.sservices");

const createTable = async (req, res, next) => {
  try {
    const body = req.body;
    const table = await TableServices.add(body);
    res.status(201).json(table);
  } catch (error) {
    next(error);
  }
};

const getTableById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const table = await TableServices.getById(id);
    res.json(table);
  } catch (error) {
    next(error);
  }
};

const changeAvailability = async (req, res, next) => {
  try {
    const availability = req.body;
    const { id } = req.params;
    // { available: true/ false }
    await TableServices.updateAvailability(availability, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const deleteTable = async (req, res, next) => {
  try {
    const { id } = req.params;
    await TableServices.delete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTable,
  getTableById,
  changeAvailability,
  deleteTable,
};
