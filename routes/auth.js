const authController = require("../controllers/auth.js")
const utils = require("../utils/utils")

module.exports = function (app, passport) {
	app.get("/signup", authController.signup)

	app.get("/settings", utils.isLoggedIn, authController.settings)

	app.get("/profile", utils.isLoggedIn, authController.profile)

	app.get("/homepage", authController.homepage)

	app.post(
		"/signup",
		passport.authenticate("local-signup", {
			successRedirect: "/",
			failureRedirect: "/signup",
		}),
	)

	app.post(
		"/signin",
		passport.authenticate("local-signin", {
			successRedirect: "/",
			failureRedirect: "/signin",
		}),
	)

	app.get("/logout", authController.logout)
}
