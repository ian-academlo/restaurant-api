"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tables",
      [
        {
          capacity: 4,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          capacity: 4,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          capacity: 4,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          capacity: 6,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          capacity: 6,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          capacity: 6,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          capacity: 4,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          capacity: 2,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tables", null, {});
  },
};
