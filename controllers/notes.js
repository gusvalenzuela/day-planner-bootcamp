const db = require(`../models`)

exports.postNotes = function (req, res) {
	const loggedUserID = req.user && req.user.id

	// POST route for saving a new note
	db.Note.findOne({
		where: { datestamp: req.body.datestamp, UserId: loggedUserID },
	})
		.then(response => {
			// if the conditional above finds a match (i.e. not new record) update instead of create
			if (response === null) {
				return db.Note.create(req.body).then(response => {
					res.json(response)
				})
			} else if (!response.isNewRecord) {
				return db.Note.update(req.body, {
					where: { id: response.dataValues.id },
				}).then(results => {
					res.json(results)
				})
			}
		})
		.catch(err => {
			// Whenever a validation or flag fails, an error is thrown
			// We can `catch` the error to prevent it from being `thrown`, which could crash our node app
			res.json(err)
		})
}

exports.getUserNotes = function (req, res) {
	const loggedUserID = req.user && req.user.id

	db.Note.findAll({ where: { UserId: loggedUserID } })
		.then(response => {
			res.json(response)
		})
		.catch(err => {
			// Whenever a validation or flag fails, an error is thrown
			// We can `catch` the error to prevent it from being `thrown`, which could crash our node app
			res.json(err)
		})
}
