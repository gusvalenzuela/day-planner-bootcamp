import moment from "moment"
import $ from "jquery"
import API from "../utils/API"

const currentDayEl = $(`#currentDay`)
const timeSettingsBtn = $(`#timeSettingsBtn`)
const containerRow = $(`#containerRow`)
const blockquoteBody = $(`#blockquoteBody`)
const blockquoteHeadline = $(`#blockquoteHeadline`)
const articleDateSpan = $(`#articleDate`)
const dateRowDiv = $(`#dateRow`)
const settingsModal = $(`.settings-modal`)
var t
var currentDateTime = moment().format(`ddd, ll`)

init()
function init() {
	retrievePastArticle()
	// display current date&time on page header
	currentDayEl.text(currentDateTime)
	setInterval(() => {
		currentDayEl.text(currentDateTime)
	}, 60000)

	generateTimeSlots()
}

timeSettingsBtn.on(`click`, e => {
	e.preventDefault()
	callSettingsModal()
})

const callSettingsModal = () => {
	settingsModal.attr(`style`, `display:block;`) // immediately displaying the modal when called
	// modalContent.empty()

	// When the user clicks anywhere outside of the modal, it closes it
	$(window).on(`click`, function (event) {
		console.log(event.target.id)
		if (
			event.target !== settingsModal[0] ||
			event.target.id !== "timeSettingsBtn"
		) {
			settingsModal.attr(`style`, `display:none;`)
		}
	})
}

function retrievePastArticle() {
	API.getArticle().then(function (res) {
		var len = res.response.docs.length
		var rand = Math.floor(Math.random() * len)
		var article = res.response.docs[rand]

		// skipping any articles from the archives that don't have a lead paragraph
		for (let i = 0; i < len; i++) {
			if (article.abstract === null) {
				console.log(`abstract is null`)
				rand = Math.floor(Math.random() * len)
				article = res.response.docs[rand]
			} else {
				break
			}
		}

		var pubDate = res.response.docs[rand].pub_date

		// console.log(article)

		// console.log(`today day is: ` + today + ` and article's pub day is: ` + pubDD)
		pubDate = moment(pubDate).format(`ll`)
		// console.log(pubDate)

		articleDateSpan.text(moment(pubDate).format(`ll`))
		// console.log(article.headline.main)
		blockquoteHeadline.text(article.headline.main)
		blockquoteBody.text(article.abstract)
		$(`#articleSource`).text(article.source)
		// save this for when you want actual day, day
		// for(i=0;i<len;i++){
		//     if(pubDD === today){
		//         console.log(`=== MATCH! ===`)
		//         console.log(`This is your article to use: ` + article.headline.main)
		//         console.log(`Published on: ` + pubDate)
		//         return
		//     } else {
		//         console.log(`Not matching: pubDD-`+pubDD+` today-`+today)
		//     }
		// }
		// console.log(`This is your article to use: ` + article.headline.main)
		// console.log(`Published on: ` + pubDate)
		// pubDate = moment(pubDate).format(`ll`)
	})
}

dateRowDiv.on(`click`, function (e) {
	var el = e.target
	var parentElement = el.parentElement

	switch (el.id || parentElement.id) {
		case `leftChevron`:
			currentDateTime = moment(currentDateTime)
				.subtract(1, `day`)
				.format(`ddd, ll`)
			currentDayEl.text(currentDateTime)
			generateTimeSlots()
			break
		case `currentDay`:
			// alert(`Today is: ` + currentDateTime)
			break
		case `rightChevron`:
			currentDateTime = moment(currentDateTime).add(1, `day`).format(`ddd, ll`)
			currentDayEl.text(currentDateTime)
			generateTimeSlots()
			break
	}
})

function printSavedData() {
	// currently placing userid in element via handlebars
	// $(containerRow).data(`userid`)

	$.get("/api/notes" + $(containerRow).data(`userid`)).then(response => {
		response.forEach(element => {
			$(`#textarea-` + element.datestamp).text(element.content)
		})
	})

	console.log()
}
function generateTimeSlots(
	time = 9,
	amount = 9,
	input = `enter your plans here`,
) {
	containerRow.empty()
	for (let i = 0; i < amount; i++) {
		var timePrint, str, dateTime

		// keeping a clean ISO date record to match datestamp
		// moment().set(Object(String, Int));
		dateTime = moment(currentDateTime)
			.set({ h: time, m: 0, s: 0, ms: 0 })
			.format()

		if (time > 24) {
			timePrint = moment(`0101 ` + (time - 24) + `:00`).format(`hhA`)
			str = moment(currentDateTime).add(1, "day").format(`YYYYMMDD`)
		} else {
			str = moment(currentDateTime).format(`YYYYMMDD`)
			timePrint = moment(`0101 ` + time + `:00`).format(`hhA`)
		}

		var newRow = $(`<div>`).attr(
			`class`,
			`row justify-content-center time-slot-row`,
		)
		var hourDisplay = $(`<div>`)
		var textareaInput = $(`<textarea>`)
		var saveBtn = $(`<button>`)
		var expandBtn = $(`<button>`)
		// var expandDiv = $(`<div>`)

		// quick check between current time and time displayed in planner
		var dateNow = moment().format(`YYYYMMDDHH`)
		var dateStamp = str + time.toString().padStart(2, "0")
		hourDisplay
			.attr(`class`, `col-2 col-md-1 hour-display`)
			.attr(`title`, `hourDisplay`)
			.attr(`data-date`, moment().format(`YYYYMMDD`))
		// appending a span inside the hour display div
		// in order to bring up the time against the minute line
		hourDisplay.append($(`<span>`).text(timePrint))
		textareaInput
			.attr(`class`, `col note-slots`)
			.attr(`placeholder`, input)
			.attr(`title`, input)
			.attr(`id`, `textarea-` + dateStamp)
			.attr(`data-datestamp`, dateStamp)
			.attr(`data-datetime`, dateTime)

		expandBtn
			.attr(`class`, `col-1 col-md-1 btn btn-info rounded-0 fa fa-chevron-down`)
			.attr(`title`, `expandBtn`)
			.attr(`id`, `expandBtn-` + dateStamp)
			.attr(`data-toggle`, `disabled`)
			.attr(`data-target`, `#textarea-` + i)
			.attr(`aria-expanded`, `false`)
			.attr(`aria-controls`, `textarea-` + dateStamp)
			.attr(`data-datestamp`, dateStamp)
			.attr(`data-datetime`, dateTime)
		saveBtn
			.attr(
				`class`,
				`col-2 col-md-1 btn btn-dark rounded-0 fa fa-save save-btn`,
			)
			.attr(`title`, `saveBtn`)
			.attr(`id`, `saveBtn-` + dateStamp)
			.attr(`data-datestamp`, dateStamp)
			.attr(`data-datetime`, dateTime)

		newRow.append(hourDisplay, textareaInput, saveBtn)

		if (dateStamp === dateNow) {
			textareaInput.addClass(`bg-current`)
			// adding a line relative to newly added "time slot" row
			// line represents the minute relative to the hour segment it is in
			newRow.prepend(
				$(
					`<div id="current-time-line" style="top: ${
						moment().format(`m`) * 1.6666666666666666667
					}%;">`,
				),
			)
			// newRow.append(saveBtn)
		} else if (dateStamp < dateNow) {
			saveBtn.addClass(`bg-past fa fa-hdd-o`)
			textareaInput.removeAttr(`placeholder`)
			textareaInput.prop(`disabled`, true)
			saveBtn.prop(`disabled`, true)
		} else {
			// newRow.append(saveBtn)
			textareaInput.addClass(`bg-future`)
		}

		containerRow.append(newRow)

		time++
	}
	printSavedData()
	// localStorage.setItem(`storedSlotData`,JSON.stringify(storedSlotData))
}
function savetoDBStorage(data) {
	$.post(`/api/notes` + $(containerRow).data(`userid`), data).then(() => {
		generateTimeSlots()
	})
}

containerRow.on(`click`, function (e) {
	e.preventDefault()
	var el = e.target

	// var found = false;

	switch (el.title) {
		case `saveBtn`:
			var buttonDateStamp = el.attributes[`data-datestamp`].value
			var noteDateTime = el.attributes[`data-datetime`].value
			var noteContent = $(`#textarea-` + buttonDateStamp)[0].value
			var noteStamp = $(`#textarea-` + buttonDateStamp)[0].attributes[
				`data-datestamp`
			].value

			var noteObj = {
				// userId: userID,
				title: noteStamp,
				content: noteContent,
				datestamp: noteStamp,
				datetime: noteDateTime,
				UserId: $(containerRow).data(`userid`), // currently placing it in element via handlebars
			}
			savetoDBStorage(noteObj)
			break
		case `expandBtn`:
			alert(`Expanding`)
			break
		case `hourDisplayX`:
			// this variable needs to be global to allow for user customization & local storage
			// will work on later
			t = prompt(`enter new time (0 - 23): `)

			if (isNaN(parseInt(t)) || t < 0 || t > 23) {
				alert(`please enter a valid number (0 - 23)`)
				break
			} else {
				localStorage.setItem(`userTimeChoice`, t)
			}

			generateTimeSlots(t)

			break
	}
})
