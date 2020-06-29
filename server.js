const db = require("./models")
const authRoute = require("./routes/auth.js")
const routes = require("./routes/index")
const express = require("express")
const passport = require("passport")
const session = require("express-session")
// const compression = require("compression")
const app = express()
require("dotenv").config()
var PORT = process.env.PORT || 8080
// app.use(compression())

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("Public"))

// Parse application body
app.use(
	express.urlencoded({
		extended: true,
	}),
)
app.use(express.json())

app.use(
	session({
		secret: "keyboard cat",
		resave: true,
		saveUninitialized: true,
	}),
) // session secret
app.use(passport.initialize())

app.use(passport.session())

// handlebars config
var exphbs = require("express-handlebars")
app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main",
	}),
)
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")

// routing
authRoute(app, passport)
routes(app)

require("./config/passport.js")(passport, db)

db.sequelize.sync().then(
	app.listen(PORT, function () {
		console.log("App listening on PORT " + PORT)
	}),
)
