'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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