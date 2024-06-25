'use strict';

const employee = require('../models/employee');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('contracts', [
      {
        title: 'Software Enginnier',
        description: 'Responsible for IT new issues and develop new apps.',
        start_date: '2022-01-01',
        department_id: 1,
        employee_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Backend Developer',
        description: 'Handles server-side logic and database management.',
        start_date: '2022-02-01',
        department_id: 1,
        employee_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Finance Manager',
        description: 'Oversees financial planning and analysis.',
        start_date: '2022-06-01',
        department_id: 2,
        employee_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contracts', null, {});
  }
};
