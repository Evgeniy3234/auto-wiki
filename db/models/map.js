'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Map extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Map.init({
    coordinates: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    discription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Map',
  });
  return Map;
};