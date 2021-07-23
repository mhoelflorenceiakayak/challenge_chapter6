'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class match_schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  match_schedule.init({
    user_game_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    match_schedule: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'match_schedule',
  });
  return match_schedule;
};