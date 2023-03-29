const { users } = require("../models");

class UserServices {
  static async add(userData) {
    try {
      const result = await users.create(userData);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
