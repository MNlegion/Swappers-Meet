const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const marketplaceRoutes = require('./marketplace-route');

router.use('/dashboard', dashboardRoutes);
router.use('/marketplace', marketplaceRoutes);

module.exports = router;




// router.use('/', catRoutes);
