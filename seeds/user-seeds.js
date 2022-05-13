const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'bkwes',
        email: 'bkwes@gmail.com',
        password: 'password'
    },
    {
        username: 'janetj',
        email: 'janet@gmail.com',
        password: 'jackson5'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;