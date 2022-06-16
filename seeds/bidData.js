const { Bid } = require('../models');

const bidData = [
    {
        user_id: 1,
        product_id: 2
    },
    {
        user_id: 1,
        product_id: 1
    }
];

const seedBidData = () => Bid.bulkCreate(bidData);

module.exports = seedBidData;