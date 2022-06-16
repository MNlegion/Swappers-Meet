const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'I want this! Call me',
        is_bid: true,
        user_id: 1,
        product_id: 1
    },
    {
        comment_text: 'No way this has to be mine',
        is_bid: true,
        user_id: 2,
        product_id: 1

    }
];

const seedCommentData = () => Comment.bulkCreate(commentdata);

module.exports = seedCommentData;