const router = require('express').Router();
const { User, Product, Comments, Category} = require('../../models');

router.get('/', (req, res) => {

    // Posts FindAll limit 5
    // .then dbposts data set to variable

    res.render('homepage', {
        dbposts,
        loggedIn: req.session.loggedIn
    })




})