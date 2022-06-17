const router = require('express').Router();
const { Product, Category, User } = require('../../models');

// get all products from most recent to least recent
router.get('/', (req, res) => {
    // console.log(req.session);

    // // if user is not logged in, redirect to homepage
    // if (!req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }

    Product.findAll({
        attributes: ['id', 'product_name', 'description', 'category_id', 'user_id'],
        // order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(dbProductData => {

        const dbproducts = dbProductData.map(product => product.get({ plain: true }));

        res.render('myproducts', {
            dbproducts,
            loggedIn: req.session.loggedIn
        })    
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;