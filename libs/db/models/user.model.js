const { Model, DataTypes, Sequelize } = require('sequelize')

const USER_TABLE = 'users'

const UserSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	email: {
		allowNull: false,
		unique: true,
		type: DataTypes.STRING
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.INTEGER
		field: 'created_at',
		defaultValue: Sequelize.NOW
	},
}


class User extends Model {
	static associate() {
		//associate
	}

	static config(sequelize) {
		return {
			sequelize,
			tableName: USER_TABLE,
			modelName: 'User', // este va a ser el nombre del modelos para interactuar con el
							// luego en los services
		}
	}
}

module.exports = { USER_TABLE, UserSchema, User }
