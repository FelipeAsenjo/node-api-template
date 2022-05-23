const { Sequelize } = require('sequelize')

const {
	dbName,
	dbUser,
	dbPassword,
	dbHost,
	dialect
} = require('../config/config').db

const db = new Sequelize(dbName, dbUser, dbPassword, {
	dbHost,
	dialect
})


const dbConnection = async () => {

	try {

		await db.authenticate()
		console.log('Databse connected')

	} catch( err ) {
		throw new Error( err )
	}

}

module.exports = dbConnection
