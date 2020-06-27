const authController = require("../controllers/auth.js")
const utils = require("../utils/utils")

module.exports = function (app, passport) {
	app.get("/signup", authController.signup)
	// logged in
	app.get("/settings", utils.isLoggedIn, authController.settings)
	app.get("/dashboard", utils.isLoggedIn, authController.dashboard)
	app.get("/planner", utils.isLoggedIn, authController.planner)

	app.get("/logout", authController.logout)

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
}
