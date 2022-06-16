// import all models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const Comment = require('./Comment');
const Bid = require('./Bid');

// model associations
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
    onDelete: 'cascade'     
});

User.hasMany(Product, {
  foreignKey: 'user_id'
});

Product.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'        
});

Product.hasMany(Comment, {
  foreignKey: 'product_id'
});

Comment.belongsTo(Product, {
  foreignKey: 'product_id',
  onDelete: 'cascade'        
});

Category.hasMany(Product, {
  foreignKey: 'product_id'
});

Product.belongsTo(Category, {
  foreignKey: "category_id"
});

// bid associations
Bid.belongsTo(Product, {
  foreignKey: 'product_id'
});

Bid.belongsTo(User, {
  foreignKey: 'user_id'
});

Product.hasMany(Bid, {
  foreignKey: 'product_id'
});

User.hasMany(Bid, {
  foreignKey: 'user_id'
});

// model exports
module.exports = {
    Product,
    Category,
    User,
    Comment,
    Bid
  };
