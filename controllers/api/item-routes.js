const router = require('express').Router();
const { Item } = require('../../models');



// get all items
router.get('/', (req, res) => {
    Item.findAll({
      attributes: [
        'product_name'
      ],
    })
    .then(dbitemData => res.json(dbitemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    // find all products
    // be sure to include its associated Category and Tag data
  });




  
module.exports = router