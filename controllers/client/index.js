const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const marketplaceRoutes = require('./marketplace-route');
const myProductRoutes = require('./userItems-route');

router.use('/dashboard', dashboardRoutes);
router.use('/marketplace', marketplaceRoutes);
router.use('/myproducts', myProductRoutes);

module.exports = router;




// router.use('/', catRoutes);
