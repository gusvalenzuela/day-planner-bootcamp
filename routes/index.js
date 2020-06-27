const notesController = require("../controllers/notes.js")
const authController = require("../controllers/auth.js")

module.exports = function (app) {
	app.post(`/api/notes/`, notesController.unregisteredNotes)
	app.get(`/api/notes/`, notesController.getNotes)

	app.get("/login", authController.login)
}
