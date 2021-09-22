const express = require('express');
const route = express.Router();
const userController = require('../controllers/UserController');

route.get('/', userController.showAll);
route.get('/search/:id', userController.search);

route.get('/consultar', userController.queryRaw);

route.get('/consultarSP', userController.queryRawSP);

// route.get('/', (req, res) =>{
//     res.send('---------- Welcome to Users ------------');
// });



module.exports = route;