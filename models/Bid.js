// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Comments model (table) by extending off Sequelize's Model class
class Bid extends Model {}

// set up fields and rules for Bid model
Bid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    product_id: {                    
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    }
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'bid'
  },
  {
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'product_id']
        }
    ]
  }
);

module.exports = Bid;
