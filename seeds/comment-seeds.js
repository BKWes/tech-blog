const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'lorem ipsum',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'ipsum lorem',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'hac di morel lem',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Much dori in havc',
        user_id: 2,
        post_id: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;