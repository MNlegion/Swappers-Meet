const router = require('express').Router();

const { Category, Comment, User, Product } = require("../../models");

// get all category---it works!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get("/", (req, res) => {
  //
  Category.findAll({
    attributes: ["id", "category_name", "product_id"],
    include: {
      model: Product,
      attributes: ["id", "product_name"],
      include: {
        model: User,
        attributes: ["id", "username"],
      },
    },
  })
    .then((productData) => res.json(productData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create category --its works!!!!!!! 
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(newCat => res.json(newCat))
  .catch(err => {
    res.status(500).json(err);
  });
});


module.exports = router;


