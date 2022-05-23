const app = require('./app')
const server = require('http').createServer(app)
const { config } = require('./config/config')
const sequelize = require('./db/connection')

(async () => {
	try {

		await sequelize.authenticate()
		console.log('Databse connected')

	} catch( err ) {
		throw new Error( err )
	}
})()

server.listen(config.port, () => {
	console.log(`App listening at port ${ config.port }`)
})
