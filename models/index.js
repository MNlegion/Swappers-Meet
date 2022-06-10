// import all models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const Comment = require('./Comment');

// model associations
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Product, {
  foreignKey: 'user_id'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

Product.hasMany(Comment, {
  foreignKey: 'product_id'
});

Comment.belongsTo(Product, {
  foreignKey: 'product_id'
});

Category.hasMany(Product, {
  foreignKey: 'product_id'
});

Product.belongsTo(Category, {
  foreignKey: "category_id"
});



// model exports
module.exports = {
    Product,
    Category,
    User,
    Comment,
  };
