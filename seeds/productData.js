const { Product } = require('../models');

const productData = [

    {
        product_name: 'It works',
        description: 'Reading Seeding Data',
        category_id: 1
        
    },
    {
        product_name: 'it really works',
        description: 'Love it, Love it',
        category_id: 1
    },

];


const seedProductData = () => Item.bulkCreate(productData);

module.exports = seedProductData;
