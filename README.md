# Swappers-Meet

# <ins>SWAPPERS-MEET</ins>
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)![](https://img.shields.io/badge/-Sequelize-d3d3d3?style=for-the-badge&logo=sequelize&logoColor=52B0E7)
## <ins>Description</ins>
Inspired by the swamp meet in Minnesota, the Swamp Meet website aims to do the same thing. Users are able to browse posted by other users and post items themselves. They can also comment on the posts.  

## <ins>Table of Contents</ins>
- [Installation](#installation)
- [Infrastructure](#infrastructure)
- [Usage](#usage)
- [License](#license)
- [FAQ](#faq)
-[Future Development Ideas](#future-development-ideas)

## <ins>Installation</ins>  
 To run the site:  
 - Download the code  
 - In the root folder, open bash  
 - Type *node install*  
 - Type *node seeds* (unless you want to proceed without seeding the database)  
 - Type *node server*  
 - Open prefered web broswer and go to *localhost:3001*  

 Alternatively go to the Geroku link: https://swappers-meet.herokuapp.com/   
 
## <ins>Infrastructure</ins>  
This project uses:  
- Bootstrap (front-end framework)  
- Handlebars (templating)
- Multer (images)  
- Bcrypt (password encryption)
- Express.js (back-end framework)
- Express-session (authentication)
- Node.js (runtime environment)
- SQL (database)
- Sequalize  
 - Sequalized is used for ORM and for meeting the MVC pardim

Deployed on Heroku
## <ins>Usage</ins>

 To view more than 5 posts that are seen on the homepage, the user must sign in or create an account by entering a username, password, and email.  
 Once logged in, the user is taken to the dashboard where they can choose to go to:  
 - The marketplace (to see all currently posted items)  
 - Their bid page (to see all items bidded on by the user)  
 - The add product page (to post their own items)  
 - Their listing page (to see all items posted by the user)  
 


## <ins>License</ins>
![](https://img.shields.io/badge/License-MIT%20-blue?style=flat-square)

This project is covered under MIT


## <ins>FAQ</ins>

## <ins>Future Development Ideas</ins>
- Sort items by category  
- Direct messaging between users or a craigslist-style email system  
- Commenting functionality on posts (separate from Bids)  
- Search bar  
- Tag item locations (local pickup in specific area vs. shipping available)  


