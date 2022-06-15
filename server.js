const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
//require multer for images//
const multer = require('multer');

const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
require('dotenv').config();

// ---------- FOR TESTING ONLY API ROUTES ---------- //
// const routes = require('./controllers/api');

const app = express();
const PORT = process.env.PORT || 3001;

//session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'SECRET',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//declare where multer stores images--can use disk storage or memory storage//
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
});
//specifies only images as uploads and extension has to be jpeg, jpg or png//
const fileFilter = (req, file, cb) => {
  if(file.mimetpye ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png') {
    cb (null, true);
  }else {
    cb (null, false);
  }
}

const upload = multer ({
  storage:storage,
  fileFilter:fileFilter
});

//middleware
// Set up custom helpers
const hbs = exphbs.create({ helpers });

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

