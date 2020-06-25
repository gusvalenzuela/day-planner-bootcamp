const db = require(`../models`)

exports.unregisteredNotes = function (req, res) {
	// POST route for saving a new note
	db.Note.findOne({ where: { datestamp: req.body.datestamp } })
		.then(({ isNewRecord }) => {
			// if the conditional above finds a match (i.e. not new record) update instead of create
			if (!isNewRecord) {
				return db.Note.create(req.body).then(response => {
					res.json(response)
				})
			} else {
				return db.Note.update({ where: { datestamp: req.body.datestamp } }, { content: req.body.content }).then(results => {
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
exports.getNotes = function (req, res) {
	// POST route for saving a new note
	// console.log(req.body)
	db.Note.findAll({})
		.then(response => {
			res.json(response)
		})
		.catch(err => {
			// Whenever a validation or flag fails, an error is thrown
			// We can `catch` the error to prevent it from being `thrown`, which could crash our node app
			res.json(err)
		})
}
