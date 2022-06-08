const router = require('express').Router();
const catRoutes = require('./category-routes');
const comRoutes = require('./comments-routes');
const proRoutes = require('./product-routes');
const usrRoutes = require('./user-routes');

router.use('/category', catRoutes);
router.use('/comments', comRoutes);
router.use('/product', proRoutes);
router.use('/user', usrRoutes);

module.exports = router;