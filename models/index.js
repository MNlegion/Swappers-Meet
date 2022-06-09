// import all models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const Comment = require('./Comment');

// model associations
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsToOne(User, {
  foreignKey: 'user_id'
});

User.hasMany(Product, {
  foreignKey: 'user_id'
});

Product.belongsToOne(User, {
  foreignKey: 'user_id'
});

Product.hasMany(Comment, {
  foreignKey: 'product_id'
});

Comment.belongsToOne(Product, {
  foreignKey: 'product_id'
});

Category.hasMany(Product, {
  foreignKey: 'product_id'
});

Product.belongsToOne(Category, {
  foreignKey: "category_id"
});



// model exports
module.exports = {
    Product,
    Category,
    User,
    Comment,
  };