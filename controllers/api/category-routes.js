const router = require('express').Router();


//returns category with associated products//

const { Category, Comment, User, Product } = require("../../models");


router.get('/', (req, res) => { //
    Category.findAll({
        attributes: [   ],
        include: {
            model: Product,
            attributes: [], 
            include: {
                model: User,
                attributes: ['id', 'username']
            }
        }

    })
        .then(productData => res.json(productData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;