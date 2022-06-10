const router = require('express').Router();
const { use } = require('.');
const { User, Product, Comment, Category } = require('../../models');

//create product////
router.post('/', (req, res) => {
    Product.Create({
        product_name: req.body.product_name,
        description: req.body.description,
        category: //not sure how to link category, how are we setting up page?
    })
        .then(createProd => res.json(createProd))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//delete product//
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


//update product? idt we will have this function, justa delete product//


//get product by id and associated comments--when click on or displaying product//

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