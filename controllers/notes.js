const db = require(`../models`)

exports.unregisteredNotes = function (req, res) {
	// POST route for saving a new note
	console.log(req.body)
	db.Note.create(req.body)
		.then(response => {
			res.json(response)
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
