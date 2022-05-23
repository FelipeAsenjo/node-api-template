require('dotenv').config()

const PRODUCTION = require('./production')
const DEVELOPMENT = require('./development')

const { NODE_ENV } = process.env

let ENV = DEVELOPMENT 

if(NODE_ENV === 'production') {
	ENV = PRODUCTION
} 
else if (NODE_ENV === 'test') {
	ENV = TEST
}

module.exports = ENV
