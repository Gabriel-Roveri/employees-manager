'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('records', [
      {
        employee_id: 1,
        contract_id: 1,
        type: 'PJ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_id: 2,
        contract_id: 2,
        type: 'PJ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_id: 3,
        contract_id: 3,
        type: 'CLT',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('records', null, {});
  }
};
