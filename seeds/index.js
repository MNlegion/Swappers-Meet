const sequelize = require('../config/connection');
const seedProductData = require('./productData');
const seedUserData = require('./userData');
const seedCategoryData = require('./categoryData');
const seedCommentData = require('./commentData');
const seedBidData = require('./bidData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUserData();
    console.log('\n----- USER DATA SEEDED -----\n');

    await seedCategoryData();
    console.log('\n----- CATEGORY DATA SEEDED -----\n');

    await seedProductData();
    console.log('\n----- PRODUCT DATA SEEDED -----\n');

    await seedCommentData();
    console.log('\n----- COMMENT DATA SEEDED -----\n');

    await seedBidData();
    console.log('\n----- BID DATA SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();