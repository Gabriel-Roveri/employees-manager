'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
   
    static associate(models) {
      Department.hasMany(models.Contract, {
        foreignKey: 'contract_id'
      });
    }
  }
  Department.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'departments'
  });
  return Department;
};