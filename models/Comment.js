// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Comments model (table) by extending off Sequelize's Model class
class Comment extends Model {}

// set up fields and rules for Comments model
// Need to continue to develop what this comments model entails
Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
      //do we want comment_text ?
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  );
  
  module.exports = Comment;