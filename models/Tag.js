const { Model, DataTypes } = require('sequelize');

const sequelize = require('../Develop/config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tag_name: {
      type: DataTypes.STR,
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
