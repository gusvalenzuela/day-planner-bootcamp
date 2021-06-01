const db = require(`../models`)

exports.postStartHour = function (req, res) {
	return db.User.update(
		{ startTime: Number(req.params.hour) },
		{ where: { id: req.session.passport.user } },
	).then(results => {
		res.json(results)
	})
}

exports.pages = function (req, res) {
	// for pages that need same data, i'm using a referer to render the appropriate page/view
	let referer = req._parsedUrl.href.slice(1) // saving the referer in the link
	//checking to see if there's a logged in user detected in the html request

	db.User.findOne({
		where: { id: req.session.passport.user },
		include: [db.Note],
		raw: false,
	}).then(({ dataValues: user }) => {
		if (user.password) {
			user.password = "*".repeat(7)
		}

		const formatOptions = {
			weekday: "short",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			// minute: "2-digit",
		}

		// formatting the way i want handlebars to display notes' times here
		// storing it in notes.formattedDate
		const notesArray = user.Notes.map(note => {
			const formattedDate = new Intl.DateTimeFormat(
				"en-us",
				formatOptions,
			).format(note.datetime)
			note.dataValues.formattedDate = formattedDate
			return note.dataValues
		})
		res.render(referer, {
			userID: user.id,
			user,
			notes: notesArray,
			loggedIn: req.session.passport.user ? true : false,
			helpers: {
				convert24to12: function (num) {
					return num > 12
						? `${num - 12} PM`
						: `${num < 10 ? `0${num}` : num} AM`
				},
			},
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
