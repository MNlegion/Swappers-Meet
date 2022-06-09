const seedProductData = require('./itemData');



const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedProductData();
    console.log('\n----- PRODUCTDATA SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();