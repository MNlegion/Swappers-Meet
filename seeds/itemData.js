const { Item } = require('../models');

const itemData = [

    {
        
        product_name: 'Reading Seeding Data',
    },
    {
       
        product_name: 'Love it, Love it',
    },

];





const seedItemData = () => Item.bulkCreate(itemData);

module.exports = seedItemData;
