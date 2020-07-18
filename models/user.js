"use strict"

const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		firstName: {
			type: DataTypes.STRING,
			allowNull: 1,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: 1,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: 0,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: 0,
		},
		startTime: {
			type: DataTypes.STRING,
			allowNull: 1,
			defaultValue: 9,
		},
		endTime: {
			type: DataTypes.STRING,
			defaultValue: 18,
			allowNull: 1,
		},
		colorTheme: {
			type: DataTypes.STRING,
			defaultValue: "default",
			allowNull: 1,
		},
	})

	User.prototype.isValidPassword = function (password) {
		return bcrypt.compareSync(password, this.password)
	}

	User.addHook("beforeCreate", user => {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
	})

	User.associate = models => {
		// Associating User with Notes
		// When a User is deleted, also deletes any associated Request(s)
		User.hasMany(models.Note, {
			onDelete: "cascade",
		})
	}

	return User
}
