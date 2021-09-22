const express = require('express');
const route = express.Router();


route.get('/', (req, res) =>{
	res.send('---------- Welcome to API V1 - 😄 -----------');
});

route.use('/users', require('./userRoute'));


module.exports = route;