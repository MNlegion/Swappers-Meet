const { Category } = require('../models');

const categorydata = [
    {
        category_name: 'Outdoors'
    },
    {
        category_name: 'Furniture'
    },
    {
        category_name: 'Clothing'
    }
];

const seedCategoryData = () => Category.bulkCreate(categorydata);

module.exports = seedCategoryData;