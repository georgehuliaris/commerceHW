// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../Develop/config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    product: {
      type: DataTypes.STR,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INT,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INT,
      references: {
        model: "category",
        key: "id",
        unique: false,
      },
    },
    
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
