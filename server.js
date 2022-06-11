const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');


// ---------- FOR TESTING ONLY API ROUTES ---------- //
// const routes = require('./controllers/api');


const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));  //joining files in plublic folder

// turn on routes
<<<<<<< HEAD
app.use('/', routes);
=======
app.use(routes);

app.use(require('./controllers/'));
>>>>>>> 508cff340e87438ce8d7e050e31d6a426494fbdd

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {  //configuration parameter ({force: true}) means that the databases must sync with the model definitions and associations or they recreate!
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });