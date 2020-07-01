// const utils = require(`../utils/utils`)
const db = require(`../models`)

exports.settings = function (req, res) {
	res.render("settings", req.user)
}

exports.pages = function (req, res) {
	// for pages that need same data, i'm using a referer to render the appropriate page/view
	let referer = req._parsedUrl.href.slice(1) // saving the referer in the link
	var activeUser, loggedIn
	//checking to see if there's a logged in user detected in the html request
	if (req.session.passport) {
		activeUser = req.session.passport.user
		loggedIn = true
	} else {
		activeUser = `none`
		loggedIn = false
	}
	db.User.findOne({
		where: { id: activeUser },
		include: [db.Note],
		raw: false,
	}).then(response => {
		if (response.dataValues.password) {
			response.dataValues.password = "*".repeat(7)
		}
		res.render(referer, {
			userID: activeUser,
			// notes: response.dataValues.Notes[0].dataValues,
			user: response.dataValues,
			loggedIn: loggedIn,
		})
	})
}

exports.logout = function (req, res) {
	req.session.destroy(function (err) {
		if (err) {
			throw err
		}
		res.redirect("/")
	})
}
