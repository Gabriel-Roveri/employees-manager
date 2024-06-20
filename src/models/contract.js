'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    
    static associate(models) {
      Contract.belongsTo(models.Department, {
        foreignKey: 'department_id'
      });
      Contract.hasOne(models.Employee, {
        foreignKey: 'employee_id'
      });
      Contract.hasOne(models.Record, {
        foreignKey: 'record_id'
      });
    }
  }
  Contract.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Contract',
    tableName: 'contracts'
  });
  return Contract;
};