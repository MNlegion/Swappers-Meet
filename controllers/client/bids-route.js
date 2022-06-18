const router = require('express').Router();
const { Product, User, Bid, Category } = require('../../models');

router.get('/', (req, res) => {

    // if user is not logged in, redirect to homepage
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    Bid.findAll({
        attributes: ['id', 'user_id', 'product_id'],
        where: {
            // where user_id is equal to logged in user
            user_id: req.session.user_id
        },
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'description', 'isClosed', 'category_id', 'user_id', 'file_path'],
                group: "isClosed",
                // sort: ['isClosed', 'DESC' ],
                // order: [['isClosed', false ]],
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    },
                    {
                        model: Category,
                        attributes: ['category_name']
                    }
                ]
            }
        ]
    })
    .then(dbBidData => {
        const bids = dbBidData.map(bid => bid.get({ plain: true }));

        res.render('mybids', {
            bids,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// // SECOND TRY
// router.get('/', (req, res) => {

//     // if user is not logged in, redirect to homepage
//     if (!req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     const openbids = await Bid.findAll({
//         attributes: ['id', 'user_id', 'product_id'],
//         where: {
//             // where user_id is equal to logged in user
//             user_id: req.session.user_id
//         },
//         include: [
//             {
//                 model: Product,
//                 attributes: ['id', 'product_name', 'description', 'isClosed', 'category_id', 'user_id', 'file_path'],
//                 where: {
//                     isClosed: false
//                 },
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['username']
//                     },
//                     {
//                         model: Category,
//                         attributes: ['category_name']
//                     }
//                 ]
//             }
//         ]
//     })
//     .then(dbBidData => {
//         return dbBidData.map(bid => bid.get({ plain: true }));
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });

//     const closedbids = await Bid.findAll({
//         attributes: ['id', 'user_id', 'product_id'],
//         where: {
//             // where user_id is equal to logged in user
//             user_id: req.session.user_id
//         },
//         include: [
//             {
//                 model: Product,
//                 attributes: ['id', 'product_name', 'description', 'isClosed', 'category_id', 'user_id', 'file_path'],
//                 // order: [['createdAt', 'DESC']],
//                 where: {
//                     isClosed: true
//                 },
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['username']
//                     },
//                     {
//                         model: Category,
//                         attributes: ['category_name']
//                     }
//                 ]
//             }
//         ]
//     })
//     .then(dbBidData => {
//         return dbBidData.map(bid => bid.get({ plain: true }));
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });

//     res.render('mybids', {
//         openbids,
//         closedbids,
//         loggedIn: req.session.loggedIn
//     })

// });


module.exports = router;