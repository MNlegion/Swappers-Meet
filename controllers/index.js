const router = require('express').Router();

const apiRoutes = require('./api');
const clientRoutes = require('./client');
//const homepageRoutes = require('./client/home-page-route');
// router.use('/', clientRoutes);
router.use('/api', apiRoutes);
console.log("cheese8index");
router.use('/', clientRoutes);
//router.use('/home-page', homepageRoutes);

// catchall
router.use((req, res) => {
  res.send("non-existent route!")
});

module.exports = router;