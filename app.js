const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

sequelize.sync()
    .then(value =>{
        console.log(`database is connected ▶️  🛢️`);
    })
    .catch(error => console.log(error));

app.listen(PORT, ()=>{
    console.log(`Server running PORT ▶️  ${PORT}`);
});


app.use('/api/v1', require('./src/routes'));