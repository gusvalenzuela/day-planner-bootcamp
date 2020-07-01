const authController = require("../controllers/auth.js")
const notesController = require("../controllers/notes.js")
const utils = require("../src/utils/utils.js")

module.exports = function (app, passport) {
	app.get("/", utils.isLoggedIn, (req, res) => {
		// req.headers.referer.split(`/`)[req.headers.referer.split(`/`).length - 1] // find the referer (url parsing)
		res.redirect("/planner")
	})
	// logged in
	app.get("/settings", utils.isLoggedIn, authController.settings)
	app.get("/dashboard", utils.isLoggedIn, authController.pages)
	app.get("/planner", utils.isLoggedIn, authController.pages)

	//notes
	app.post(`/api/notes:id`, notesController.postNotes)
	app.get(`/api/notes:id`, notesController.getUserNotes) // use is_logged in after req

	// post routes
	app.post(
		"/signup",
		passport.authenticate("local-signup", {
			successRedirect: "/",
			failureRedirect: "/signup",
		}),
	)

	app.post(
		"/login",
		passport.authenticate("local-login", {
			successRedirect: "/planner",
			failureRedirect: "/login",
		}),
	)
	app.get("/logout", authController.logout)
}
