// const utils = require(`../utils/utils`)
const db = require(`../models`)

exports.settings = function (req, res) {
	res.render("settings", req.user)
}

exports.planner = function (req, res) {
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
		// const filteredResponse = utils.filterUserResponse(response).response
		res.render(`planner`, {
			userID: activeUser,
			notes: response.dataValues.Notes,
			email: response.dataValues.email,
			// requests: response,
			loggedIn: loggedIn,
		})
	})
}

exports.dashboard = function (req, res) {
	db.User.findOne({
		include: [db.Note],
		where: {
			id: req.user.id,
		},
		raw: false,
	}).then(response => {
		res.render("dashboard", {
			response: response,
			loggedIn: true,
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
