import moment from "moment"
import $ from "jquery"
import API from "./utils/API"

const currentDayEl = $(`#currentDay`)
const timeSettingsBtn = $(`#timeSettingsBtn`)
const containerRow = $(`#containerRow`)
const blockquoteBody = $(`#blockquoteBody`)
const blockquoteHeadline = $(`#blockquoteHeadline`)
const articleDateSpan = $(`#articleDate`)
const dateRowDiv = $(`#dateRow`)
const settingsModal = $(`.settings-modal`)

var storedSlotData, t
var currentDateTime = moment().format(`LLLL`)

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
		pubDate = moment(pubDate).format(`LL`)
		// console.log(pubDate)

		articleDateSpan.text(moment(pubDate).format(`LL`))
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
		// pubDate = moment(pubDate).format(`LL`)
	})
}

function init() {
	retrievePastArticle()
	// display current date&time on page header
	setInterval(() => {
		currentDayEl.text(currentDateTime)
	}, 1000)

	if (JSON.parse(localStorage.getItem(`storedSlotData`)) === null) {
		storedSlotData = []
	} else {
		storedSlotData = JSON.parse(localStorage.getItem(`storedSlotData`))
	}

	generateTimeSlots()
	printSavedData()
}

init()

dateRowDiv.on(`click`, function (e) {
	var el = e.target

	switch (el.id) {
		case `leftChevron`:
			alert(`this is the left`)
			break
		case `currentDay`:
			alert(`Today is: ` + currentDateTime)
			break
		case `rightChevron`:
			alert(`this is the right`)
			break
	}
})

function printSavedData() {
	$.get("/api/notes").then(response => {
		response.forEach(element => {
			$(`#textarea-` + element.datestamp).text(element.content)
		})
	})

	// for (i = 0; i < storedSlotData.length; i++) {
	//     $(`#textarea-` + storedSlotData[i].datestamp).text(storedSlotData[i].message)
	//     // console.log(`datestamps in obj are: `)
	//     // console.log(storedSlotData[i].datestamp)
	// }
}
function generateTimeSlots(
	time = 9,
	amount = 9,
	input = `enter your plans here`,
) {
	for (let i = 0; i < amount; i++) {
		var timePrint, str

		if (time > 24) {
			timePrint = moment(`0101 ` + (time - 24) + `:00`).format(`hh:mm A`)
			str = moment().add(1, "day").format(`YYYYMMDD`)
		} else {
			str = moment().format(`YYYYMMDD`)
			timePrint = moment(`0101 ` + time + `:00`).format(`hh:mm A`)
		}

		var newRow = $(`<div>`).attr(
			`class`,
			`row mb-1 w-100 justify-content-center timeSlotRow`,
		)
		var timeDisplay = $(`<div>`)
		var textareaInput = $(`<textarea>`)
		var saveBtn = $(`<i>`)
		var expandBtn = $(`<i>`)
		// var expandDiv = $(`<div>`)

		// quick check between current time and time displayed in planner
		var dateNow = moment().format(`YYYYMMDDHH`)
		var dateStamp = str + time.toString().padStart(2, "0")

		timeDisplay
			.attr(`class`, `col-2 bg-light time-display px-2 text-right`)
			.text(timePrint)
			.attr(`title`, `timeDisplay`)
			.attr(`data-date`, moment().format(`YYYYMMDD`))
		textareaInput
			.attr(`class`, `col col-lg-8 note-slots`)
			.attr(`placeholder`, input)
			.attr(`title`, `textarea`)
			.attr(`id`, `textarea-` + dateStamp)
			.attr(`data-datestamp`, dateStamp)

		expandBtn
			.attr(`class`, `col-1 btn btn-info rounded-0 fa fa-chevron-down`)
			.attr(`title`, `expandBtn`)
			.attr(`id`, `expandBtn-` + dateStamp)
			.attr(`data-toggle`, `disabled`)
			.attr(`data-target`, `#textarea-` + i)
			.attr(`aria-expanded`, `false`)
			.attr(`aria-controls`, `textarea-` + dateStamp)
			.attr(`data-datestamp`, dateStamp)
		saveBtn
			.attr(`class`, `col-1 btn btn-dark rounded-0 fa fa-save`)
			.attr(`title`, `saveBtn`)
			.attr(`id`, `saveBtn-` + dateStamp)
			.attr(`data-datestamp`, dateStamp)

		newRow.append(timeDisplay, textareaInput)

		if (dateStamp === dateNow) {
			textareaInput.addClass(`bg-current`)
			newRow.append(saveBtn)
		} else if (dateStamp < dateNow) {
			textareaInput.addClass(`bg-past`)
			textareaInput.removeAttr(`placeholder`)
		} else {
			newRow.append(saveBtn)
			textareaInput.addClass(`bg-future`)
		}

		containerRow.append(newRow)

		time++
	}

	// localStorage.setItem(`storedSlotData`,JSON.stringify(storedSlotData))
}
function removeTimeSlots() {
	// console.log(`======= removeTimeSlots() function START =======`)

	containerRow[0].innerHTML = ``

	// console.log(`======= removeTimeSlots() function END =======`)
}
function savetoDBStorage(data) {
	console.log(data)

	$.post(`/api/notes`, data).then(resp => {
		console.log(resp)
	})
}
function savetoLocalStorage(event) {
	var el = event.target
	var buttonDateStamp = el.attributes[`data-datestamp`].value
	var winnerTextarea = $(`#textarea-` + buttonDateStamp)
	var winnerMessage = winnerTextarea[0].value
	var winnerStamp = winnerTextarea[0].attributes[`data-datestamp`].value
	var found = false

	// checking to see if timeslot already exists in savedObj
	for (let j = 0; j < storedSlotData.length; j++) {
		if (storedSlotData[j].datestamp === winnerStamp) {
			// if entry already exists, update found variable so no new obj gets inserted
			found = true
			console.log(`found a match in the saved logs`)
			storedSlotData[j].message = winnerMessage // update the value to new text input
			localStorage.setItem(`storedSlotData`, JSON.stringify(storedSlotData))
			// return found
		}
	}
	// if no entry found in savedObj make new obj from template and insert relevant info
	if (found) {
		return (found = false)
	} else {
		var newObj = {}
		newObj.datestamp = winnerStamp
		newObj.message = winnerMessage

		storedSlotData.push(newObj)
		localStorage.setItem(`storedSlotData`, JSON.stringify(storedSlotData)) // don't forget to update the savedObj
	}

	setTimeout(() => {
		// half a second for post to update in DB, so populating at refresh has newest creation/update
		window.location.href = "/"
	}, 500)
}

containerRow.on(`click`, function (e) {
	e.preventDefault()
	var el = e.target

	// var found = false;

	switch (el.title) {
		case `saveBtn`:
			var buttonDateStamp = el.attributes[`data-datestamp`].value
			var noteContent = $(`#textarea-` + buttonDateStamp)[0].value
			var noteStamp = $(`#textarea-` + buttonDateStamp)[0].attributes[
				`data-datestamp`
			].value

			var noteObj = {
				title: noteStamp,
				content: noteContent,
				datestamp: noteStamp,
			}
			savetoLocalStorage(e)
			savetoDBStorage(noteObj)
			break
		case `expandBtn`:
			alert(`Expanding`)
			break
		case `timeDisplay`:
			// this variable needs to be global to allow for user customization & local storage
			// will work on later
			t = prompt(`enter new time (0 - 23): `)

			if (isNaN(parseInt(t)) || t < 0 || t > 23) {
				alert(`please enter a valid number (0 - 23)`)
				break
			} else {
				localStorage.setItem(`userTimeChoice`, t)
			}

			removeTimeSlots()
			generateTimeSlots(t)

			break
	}
})
