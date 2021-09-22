const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('users',{
	id: {
		primaryKey:true,
		autoIncrement: true,
		type: DataTypes.INTEGER
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	state: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},

}, {
	tableName: 'users',
	freezeTableName: true
});

module.exports = User;