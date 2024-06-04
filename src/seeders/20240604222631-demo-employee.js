'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', 
    [{
      id: 1,
      name: "Derk",
      email: "dyaxley0@ning.com",
      cpf: "22-410-7416",
      status: true,
      role: "Supervisor",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      name: "Lucina",
      email: "lpetche1@springer.com",
      cpf: "23-060-6916",
      status: false,
      role: "Subcontractor",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      name: "Stephana",
      email: "scastellani2@domainmarket.com",
      cpf: "02-351-3304",
      status: false,
      role: "Construction Foreman",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 4,
      name: "Curtis",
      email: "ctrewhella3@jigsy.com",
      cpf: "66-168-4455",
      status: true,
      role: "Construction Worker",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 5,
      name: "Kory",
      email: "kcheshir4@simplemachines.org",
      cpf: "57-382-7707",
      status: true,
      role: "Architect",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
