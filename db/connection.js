const { Sequelize } = require('sequelize')

const {
	database,
	user,
	password,
	host,
	dialect
} = require('../config').DB

const db = new Sequelize(database, user, password, {
	host,
	dialect
})


async dbConnection() {

	try {

		await db.authenticate()
		console.log('Databse connected')

	} catch( err ) {
		throw new Error( err )
	}

}

module.exports = dbConnection
