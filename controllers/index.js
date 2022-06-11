const router = require('express').Router();

const apiRoutes = require('./api/index');
const clientRoutes = require('./client/index');

router.use('/api', apiRoutes);
router.use('/', clientRoutes);

// catchall
router.use((req, res) => {
  res.send("<h1>Sorry, non-existent route!</h1>")
});

module.exports = router;