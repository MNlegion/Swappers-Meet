const router = require('express').Router();
const { User, Product, Comment, Category } = require('../../models');

//create product---it works!!!!!!!!!!!!!!!!!!!!!!!!////
router.post('/', (req, res) => {
    Product.create({
        product_name: req.body.product_name,
        description: req.body.description,
        category_id: req.body.category_id
        //category: not sure how to link category, and include username how are we setting up page?
    })
        .then(createProd => res.json(createProd))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//delete product, should delete any comments associated with product? it works as of now!!!!!!!!!!!!!!!!!!!!!!!//
router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(delProd => {
        if (!delProd) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(delProd);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    
})


//find all products
router.get('/', (req, res) => {
    Product.findAll({
        include: [
            {
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
            }
        ]
    })
        .then(productData => res.json(productData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



//get product by id and associated comments--when click on or displaying product//
//works to get product but no comments because none are made!!!!!!!!!!!!!!!!!!
router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
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