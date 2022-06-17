const router = require('express').Router();
const { User } = require('../../models');
const sequelize = require('../../config/connection');

// dashboard route
router.get('/', (req, res) => {
    // console.log(req.session);

    // // if user is not logged in, redirect to homepage
    // if (!req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }

    res.render('dashboard', { loggedIn: req.session.loggedIn });
});

module.exports = router;