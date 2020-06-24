"use strict"

module.exports = (sequelize, DataTypes) => {
	const Note = sequelize.define("Note", {
		title: {
			type: DataTypes.STRING,
			validate: {
				len: [1, 128],
			},
			defaultValue: `Enter a title here`,
		},
		content: {
			type: DataTypes.STRING,
			// validate: {
			// 	len: [1, 128],
			// },
			defaultValue: `Enter a brief note here`,
		},
		datestamp: {
			type: DataTypes.STRING,
			// validate: {
			// 	len: [1, 128],
			// },
		},
	})

	Note.associate = models => {
		// Associating Userdetails with User
		Note.belongsTo(models.User, {
			foreignKey: {
				type: DataTypes.INTEGER,
			},
		})
	}

	return Note
}
