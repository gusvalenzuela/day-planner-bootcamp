module.exports = function (app) {
	app.get("/login", (req, res) => {
		res.render("login")
	})

	app.get("/signup", (req, res) => {
		// req.flash(`error`,`error message`)
		res.render("signup")
	})
}
