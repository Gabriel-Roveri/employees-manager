'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('departments', [
      {
        title: 'IT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Finance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Manager',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Consultant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Marketing',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departments', null, {});
  }
};
