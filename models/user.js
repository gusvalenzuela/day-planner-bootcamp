"use strict"

const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: {
			type: DataTypes.STRING,
			allowNull: 0,
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
