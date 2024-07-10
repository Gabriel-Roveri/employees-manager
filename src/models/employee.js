'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    
    static associate(models) {
      Employee.hasMany(models.Contract, {
        foreignKey: 'contract_id'
      });

      Employee.hasOne(models.Record, {
        foreignKey: 'record_id',
        as: 'employeeRecords'
      });
    }
  }
  Employee.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: "employees"
  });
  return Employee;
};