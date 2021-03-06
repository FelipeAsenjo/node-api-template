require('dotenv').config()

const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3000,
	db: {
		dbUser: process.env.DB_USER,
		dbPassword: process.env.DB_PASSWORD,
		dbName: process.env.DB_NAME, 
		dbHost: process.env.HOST,
		dbPort: process.env.DB_PORT,
		dialect: "postgres"
	}
}

module.exports = { config }
