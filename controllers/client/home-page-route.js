const router = require('express').Router();
const { Product, User, Category } = require('../../models');


router.get('/', (req, res) => {
  

    // Posts FindAll limit 5 newest products
    Product.findAll({
      attributes: ['product_name', 'description'],
      // order: [],
    })
    // .then dbposts data set to variable
    .then(dbProductData => {
        // pass a single post object ino the homepage template
        const products = dbProductData.map(product => product.get({ plain: true}));
        //console.log(products.get({ plain: true }));

        res.render('home-page', {
          products,
          loggedIn: req.session.loggedIn
      })  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//single get?

router.get("/", (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "description"
    ],
  })
  .then(dbProductData => {
    if(!dbProductData) {return;}

    const prod = dbProductData.get({ plain: true});

    res.render("home-page", {
      prod
      
    });
  });
});


//login route
router.post('/login', (req, res) => {
   
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(UserData => {
      if (!UserData) {
        res.status(400).json({ message: 'No user with that username!' });
        return;
      }
  
      const validPassword = UserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = UserData.id;
        req.session.username = UserData.username;
        req.session.loggedIn = true;
    
        res.json({ user: UserData, message: 'You are now logged in!' });
      });
    });
  });
  
module.exports = router;