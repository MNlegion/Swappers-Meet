const { Product } = require('../models');

const productData = [

    {
        product_name: 'Basketball',
        description: 'good used condition, needs air',
        category_id: 1,
        // user_id: 1
        
    },
    {
        product_name: 'Dresser',
        description: 'Very sturdy! Great dresser, but not the right fit for our new place',
        category_id: 2,
        // user_id: 1
    },

];


const seedProductData = () => Product.bulkCreate(productData);

module.exports = seedProductData;
