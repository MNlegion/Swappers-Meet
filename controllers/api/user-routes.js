const router = require('express').Router();
const { use } = require('.');
const { User, Product, Comment, Category} = require('../../models');

//create user, put route also in homepage????//
router.post('/signup', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(userSignup => {
        req.session.save(() => {
          req.session.user_id = userSignup.id;
          req.session.username = userSignup.username;
          req.session.loggedIn = true;
    
          res.json(userSignup);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

//update user---are we goign to have an update form for user? idt so//
router.put('/:id', (req, res) => {
    User.update(req.body.email, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(userUpdate => {
        if (!userUpdate) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(userUpdate);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

//get user----will display username and email---not sure about path name//
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(userData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


//delete user---do we want this function?//
router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(userDelete => {
        if (!userDelete) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(userDelete);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;