const router = require('express').Router();

const { User, Product, Comment, Category } = require('../../models');

//create user-----IT WORKS and doesn't allow creation of duplicate email !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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


//update user---are we going to have an update form for user email? idt so// BUT IT WORKS ANYWAYS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!S
router.put('/:id', (req, res) => {
  User.update({
    email: req.body.email
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(updateEmail => {
      if (!updateEmail) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(updateEmail);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



//get user by id THIS WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

//find all users---IT WORKS!!!!!
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    include: {
      model: Product,
      attributes: ["product_name"]
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


//delete user---do we want this function? BUT IT WORKS ANYWAYS!!!!!!!!!!!!!!!!!!!!!!!!//
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


//login it works and password is encrypted!!!!!!!!!!!!!!!!!!!!!!!!!
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(userLogin => {
    if (!userLogin) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = userLogin.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userLogin.id;
      req.session.username = userLogin.username;
      req.session.loggedIn = true;

      res.json({ user: userLogin, message: 'You are now logged in!' });
    });
  });
});



//logout it works!!!!!!!!!!!!!!!
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