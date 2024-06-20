'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    
    static associate(models) {
      Record.hasOne(models.Employee, {
        foreignKey: 'employee_id'
      });
      Record.hasOne(models.Contract, {
        foreignKey: 'contract_id'
      });
    }
  }
  Record.init({
    type: DataTypes.ENUM('CLT', 'PJ')
  }, {
    sequelize,
    modelName: 'Record',
    tableName: 'records'
  });
  return Record;
};