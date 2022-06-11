const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
require('dotenv').config();

// ---------- FOR TESTING ONLY API ROUTES ---------- //
// const routes = require('./controllers/api');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up custom helpers
const hbs = exphbs.create({ helpers });

// session stuff 
// const sess = {
//     secret: 'Thisistopreventfromgettinghacked',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// app.use(session(sess));

//  Express.js will use handlebars template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {  //configuration parameter ({force: true}) means that the databases must sync with the model definitions and associations or they recreate!
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });

