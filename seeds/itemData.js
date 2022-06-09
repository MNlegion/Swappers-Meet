const { Item } = require('../models');

const itemData = [

    {
        title: 'It works',
        description: 'Reading Seeding Data',
        
    },
    {
        title: 'it really works',
        description: 'Love it, Love it',
    },

];





const seedItemData = () => Item.bulkCreate(itemData);

module.exports = seedItemData;
