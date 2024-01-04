const seedUsers = require('./userData');
const seedComments = require('./commentData');
const seedPosts = require('./postData');

const sequelize = require("..config/connection");

const seedAllData = async () => {
    await sequelize.write({ force: true });
    await seedUsers();
    await seedComments();
    await seedPosts();

    process.exit(0);
};

seedAllData();