// router.get('/', (req, res) => {

//     // Posts FindAll limit 5 newest products
//     // .then dbposts data set to variable

//     res.render('homepage', {
//         dbposts,
//         loggedIn: req.session.loggedIn
//     })

// })


// //login route
// router.post('/login', (req, res) => {
   
//     User.findOne({
//       where: {
//         username: req.body.username
//       }
//     }).then(UserData => {
//       if (!UserData) {
//         res.status(400).json({ message: 'No user with that username!' });
//         return;
//       }
  
//       const validPassword = UserData.checkPassword(req.body.password);
  
//       if (!validPassword) {
//         res.status(400).json({ message: 'Incorrect password!' });
//         return;
//       }
  
//       req.session.save(() => {
//         req.session.user_id = UserData.id;
//         req.session.username = UserData.username;
//         req.session.loggedIn = true;
    
//         res.json({ user: UserData, message: 'You are now logged in!' });
//       });
//     });
//   });
  