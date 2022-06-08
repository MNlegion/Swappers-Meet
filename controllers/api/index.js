const router = require('express').Router();

const itemRoutes = require('./item-routes');


router.use('/item', itemRoutes);








module.exports = router;
