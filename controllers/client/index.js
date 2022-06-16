const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const marketplaceRoutes = require('./marketplace-route');
const myProductRoutes = require('./userItems-route');
const homepageRoutes = require('./home-page-route');

router.use('/dashboard', dashboardRoutes);
router.use('/marketplace', marketplaceRoutes);
router.use('/myproducts', myProductRoutes);
router.use('/', homepageRoutes);

module.exports = router;