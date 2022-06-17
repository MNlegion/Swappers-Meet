const router = require('express').Router();
const { Bid } = require('../../models');

//find all bid
router.get('/', (req, res) => {
    Bid.findAll()
      .then(dbBidData => res.json(dbBidData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

//create bid//
router.post('/', (req, res) => {
    // expects => {user_id: 1, product_id: 2}
    Bid.create({
      user_id: req.body.user,
      product_id: req.body.product  //
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