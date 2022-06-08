const seedItemData = require('./itemData');



const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedItemData();
    console.log('\n----- itemData SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();