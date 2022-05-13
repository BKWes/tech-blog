const { Post } = require('../models');

const postData = [
    {
        title: 'Cool new blog site!',
        post_url: 'https://techblog.com',
        user_id: 1
    },
    {
        title: 'New blockchain tech!',
        post_url: 'https://ethereum.io',
        user_id: 2
    },
    {
        title: 'Free internet!',
        post_url: 'https://usgov.org',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;