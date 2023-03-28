const { Table } = require("../models");

class TableServices {
  static async add(body) {
    try {
      const table = await Table.create(body);
      return table;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const table = await Table.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return table;
    } catch (error) {
      throw error;
    }
  }

  static async updateAvailability(availability, id) {
    try {
      const result = await Table.update(availability, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const del = await Table.destroy({ where: { id } });
      return del;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TableServices;
