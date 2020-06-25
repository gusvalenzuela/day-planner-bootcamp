const notesController = require("../controllers/notes.js")

module.exports = function (app, passport) {
	app.post(`/api/notes/`, notesController.unregisteredNotes)
	app.get(`/api/notes/`, notesController.getNotes)
}
