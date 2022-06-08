const { Item } = require('../models');

const itemData = [

    {
        id: 1,
        product_name: 'Reading Seeding Data'
    },
    {
        id: 2,
        product_name: 'Love it, Love it'
    }

];





const seedProducts = () => Item.bulkCreate(itemData);

module.exports = seedProducts;
