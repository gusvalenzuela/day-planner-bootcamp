// const utils = require(`../utils/utils`)
const db = require(`../models`)

exports.signup = function (req, res) {
	res.render("signup")
}

exports.settings = function (req, res) {
	res.render("settings", req.user)
}

exports.homepage = function (req, res) {
	//checking to see if there's a logged in user detected in the html request
	if (req.session.passport) {
		var activeUser = req.session.passport.user
		var loggedIn = true
	} else {
		var activeUser = `none`
		var loggedIn = false
	}

	db.User.findAll({
		include: [db.Notes],
		raw: false,
	}).then(response => {
		// const filteredResponse = utils.filterUserResponse(response).response
		res.render(`homepage`, {
			activeUser: activeUser,
			data: filteredResponse,
			user: filteredResponse,
			requests: filteredResponse,
			loggedIn: loggedIn,
		})
	})
}
exports.signin = function (req, res) {
	res.render("signin")
}

exports.profile = function (req, res) {
	db.User.findOne({
		include: [db.Notes],
		where: {
			id: req.user.id,
		},
		raw: false,
	}).then(response => {
		console.log(response)
		res.render(`profile`, response)
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
