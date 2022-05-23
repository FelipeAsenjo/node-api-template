const { Sequelize } = require('sequelize')
const { config } = require('../config/config')

const setupModels = require('./models')


const USER = encodeURIComponent( config.dbUser )
const PASSWORD = encodeURIComponent( config.dbPassword )
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


const sequelize = new Sequelize(URI, {
	config.dialect
	logging: true
})

setupModels(sequelize)

// eliminar para reemplazar por migrations en prod
sequelize.sync()

module.exports = sequelize
