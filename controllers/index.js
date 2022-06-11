const router = require('express').Router();

const apiRoutes = require('./api');
// const clientRoutes = require('./client');

// router.use('/', clientRoutes);
router.use('/api', apiRoutes);

// catchall
router.use((req, res) => {
  res.send("<h1>Sorry, non-existent route!</h1>")
});

module.exports = router;