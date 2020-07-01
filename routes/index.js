module.exports = function (app) {
	app.get("/login", (req, res) => {
		res.render("login")
	})

	app.get("/signup", ({ body }, res) => {
		console.log(body)
		res.render("signup")
	})
}
