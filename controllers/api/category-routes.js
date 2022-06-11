const router = require('express').Router();

//returns category with associated products//

const { Category, Comment, User, Product } = require("../../models");

// get all

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



module.exports = router;


