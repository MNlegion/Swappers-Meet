const router = require('express').Router();
const { Product, Category, User, Comment, Bid } = require('../../models');

// get all products from most recent to least recent
router.get('/', (req, res) => {
    // console.log(req.session);

    // // if user is not logged in, redirect to homepage
    // if (!req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }

    Product.findAll({
        attributes: ['id', 'product_name', 'description'],
        // where: {
        //     // where user_id is equal to the logged in user id?
        //     user_id: req.session.id
        // },
        // order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: Bid,
                attributes: ['id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
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