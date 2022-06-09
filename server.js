const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

const routes = require('./controllers');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));  //joining files in plublic folder

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {  //configuration parameter ({force: true}) means that the databases must sync with the model definitions and associations or they recreate!
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });