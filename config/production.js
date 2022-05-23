module.exports = {
	PORT: process.env.PORT,
	DB: {
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME, 
		host: process.env.HOST,
		dialect: "postgres"
	}
}
