const router = require('express').Router();
const { Bid } = require('../../models');




//find all comments-works but no seed data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/', (req, res) => {
    Bid.findAll()
      .then(dbBidData => res.json(dbBidData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

//create comment// we dont have product id in seeds, not sure if we want to set up route differently or add id to product
router.post('/', (req, res) => {
    // expects => {user_id: 1, product_id: 2}
    Bid.create({
      user_id: req.session.user_id,
      product_id: req.body.product_id  //
    })
      .then(dbBidData => res.json(dbBidData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

//delete comments//---no seeded but returns no comment with this id so should work!!!!!!
router.delete('/:id', (req, res) => {
    Bid.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbBidData => {
        if (!dbBidData) {
          res.status(404).json({ message: 'No bid found with this id!' });
          return;
        }
        res.json(dbBidData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;