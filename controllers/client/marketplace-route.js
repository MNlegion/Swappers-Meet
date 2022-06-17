const router = require('express').Router();
const { Product, Category, User } = require('../../models');
// const sequelize = require('../../config/connection');

// marketplace route  (/marketplace)
router.get('/', (req, res) => {
    // console.log(req.session);

    // // if user is not logged in, redirect to homepage
    // if (!req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }

    Product.findAll({
        attributes: ['id', 'product_name', 'description', 'category_id', 'file_path'],
        where: {
            isClosed: false
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Category,
                attributes: ['id', 'category_name']
            }
        ]
    })
    .then(dbProductData => {
        const products = dbProductData.map(product => product.get({ plain: true }));
        res.render('marketplace', {
            products,
            loggedIn: req.session.loggedIn,
            user: req.session.user_id,
            username: req.session.username
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;