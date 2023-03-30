"use strict";

const getTime = (timestamp) => {
  const millis = timestamp * 1000;
  const date = new Date(millis);
  return date.toDateString();
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "espagetti",
          description: "el mejor espaguetti de tu vida",
          price: 8.5,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Hamburguesa",
          description: "shalala hslaalaa",
          price: 9.25,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "batido de fresa",
          description: "shalala shalalal",
          price: 4.75,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Orden de tacos",
          description: "shalalal shalallaa",
          price: 5.0,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "pollo a la brasa",
          description: "shalalal shalalala",
          price: 12.5,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
