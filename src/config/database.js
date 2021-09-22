const {Sequelize} = require('sequelize');
require('dotenv').config();

const {HOST, DB_NAME, DB_USERNAME, DB_PASSWORD} = process.env;


const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD , {
    dialect: 'mssql',
    host: HOST,
	port: 1433,
    define: {
        timestamps: false
      },
});

const testConnection = async() => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully 😄.');
	  } catch (error) {
		console.error('Unable to connect to the database:', error);
	  }
}

// testConnection();

module.exports = sequelize;