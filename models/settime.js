'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SetTime.init({
    stage_id: DataTypes.SMALLINT,
    event_id: DataTypes.SMALLINT,
    band_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    set_time_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SetTime',
  });
  return SetTime;
};