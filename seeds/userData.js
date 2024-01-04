const { User } = require('../models');

const userData = [
    {
        username: 'bob0',
        email: 'bob0@example.com',
        password: 'password0',
    },
    {
        username: 'bob1',
        email: 'bob1@example.com',
        password: 'password1',
    },
    {
        username: 'bob2',
        email: 'bob2@example.com',
        password: 'password2',
    },
    {
        username: 'bob3',
        email: 'bob3@example.com',
        password: 'password3',
    },
    {
        username: 'bob4',
        email: 'bob4@example.com',
        password: 'password4',
    },
    {
        username: 'bob5',
        email: 'bob5@example.com',
        password: 'password5',
    },
    {
        username: 'bob6',
        email: 'bob6@example.com',
        password: 'password6',
    },
    {
        username: 'bob7',
        email: 'bob7@example.com',
        password: 'password7',
    },
    {
        username: 'bob8',
        email: 'bob8@example.com',
        password: 'password8',
    },
    {
        username: 'bob9',
        email: 'bob9@example.com',
        password: 'password9',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;