const router = require('express').Router();
const { Product, User, Bid, Category } = require('../../models');

let openbids = [];
let closedbids = [];

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
                attributes: ['id', 'product_name', 'description', 'isClosed', 'category_id', 'user_id', 'file_path', 
                            // sequelize.fn('count', sequelize.col('isClosed'))
                        ],
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    },
                    {
                        model: Category,
                        attributes: ['category_name']
                    }
                ],
                group: "Product.isClosed",
            }
        ]
    })
    .then(dbBidData => {
        console.log("first product is closed", dbBidData[0].product.isClosed);
        const bids = dbBidData.map(bid => bid.get({ plain: true }));
    
        // console.log("first product", bids.length);

        for (const b of bids) {
           console.log(b.product.isClosed)

           // if isClosed = true / product is closed
           if (b.product.isClosed === true) {
            closedbids.push(b);
           } else {
               openbids.push(b)
           }
        };

        console.log("closedbids", closedbids);
        console.log("openbids", openbids);

        res.render('mybids', {
            bids,
            closedbids,
            openbids,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// SECOND TRY
// router.get('/', (req, res) => {

//     // if user is not logged in, redirect to homepage
//     if (!req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     Bid.findAll({
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
//         return openbids = dbBidData.map(bid => bid.get({ plain: true }));
//     })
//     .then(
//         Bid.findAll({
//             attributes: ['id', 'user_id', 'product_id'],
//             where: {
//                 // where user_id is equal to logged in user
//                 user_id: req.session.user_id
//             },
//             include: [
//                 {
//                     model: Product,
//                     attributes: ['id', 'product_name', 'description', 'isClosed', 'category_id', 'user_id', 'file_path'],
//                     // order: [['createdAt', 'DESC']],
//                     where: {
//                         isClosed: true
//                     },
//                     include: [
//                         {
//                             model: User,
//                             attributes: ['username']
//                         },
//                         {
//                             model: Category,
//                             attributes: ['category_name']
//                         }
//                     ]
//                 }
//             ]
//         })
//         .then(dbBidData => {
//             return closedbids = dbBidData.map(bid => bid.get({ plain: true }));
//         })
//     )
//     .then(
//         res.render('mybids', {
//             openbids,
//             closedbids,
//             loggedIn: req.session.loggedIn
//         })
//     )
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });


module.exports = router;