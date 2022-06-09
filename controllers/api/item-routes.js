const router = require('express').Router();
const { Item } = require('../../models');



// get all items
router.get('/', (req, res) => {
    Item.findAll()
    .then(dbitemData => res.json(dbitemData)) 
    
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    // find all productspm start
    // be sure to include its associated Category and Tag data
  });




  
module.exports = router