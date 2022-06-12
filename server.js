const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3001;

//session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'theuncrackableunbreakablemysteriouspasswordthatyouwillneverhack',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));  //joining files in plublic folder

// turn on routes
app.use(routes);

app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {  //configuration parameter ({force: true}) means that the databases must sync with the model definitions and associations or they recreate!
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });