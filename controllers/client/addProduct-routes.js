const { Category } = require ('../../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    Category.findAll({
       attributes: ['id', 'category_name']
    })
    .then( dbcategory => {
        const categories = dbcategory.map(category => category.get({ plain: true }));
        res.render("addProduct", { categories })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    
});

module.exports = router;