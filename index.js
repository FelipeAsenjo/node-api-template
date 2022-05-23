const app = require('./app')
const server = require('http').createServer(app)
const ENV = require('./config')
const dbConnection = require('./db/connection')

//dbConnection()

server.listen(ENV.PORT, () => {
	console.log(`App listening at port ${ ENV.PORT }`)
})
