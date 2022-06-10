const router = require('express').Router();
const sequelize = require('../config/connection');

//returns category with associated products//

const { Product, Comment, User } = require("../../models");


router.get('/:id', (req, res) => {
    Product.findAll({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Product,
                include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username', 'email']
                }]
            }

        ]
    })
        .then(productData => res.json(productData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;