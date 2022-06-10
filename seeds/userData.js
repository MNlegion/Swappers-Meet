const { User } = require('../models');

const userdata = [
    {
        username: 'pickleparrot',
        email: 'test@test.com',
        password: "test"
    },
    {
        username: 'ilovebees',
        email: 'bees@test.com',
        password: "password"
    }

];

const seedUserData = () => User.bulkCreate(userdata);

module.exports = seedUserData;