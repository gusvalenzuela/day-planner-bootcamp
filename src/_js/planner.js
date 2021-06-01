import moment from "moment"
import API from "../utils/API"
import "../_css/planner.css"

const currentDayHTMLElement = document.getElementById("currentDay")
const timeblockHTMLContainer = document.getElementById("timeblockContainer")
const timeSettingsButton = document.getElementById("timeSettingsBtn")
const settingsModal = document.getElementById("settings-modal")
const dateRowHTMLElement = document.getElementById("dateRow")
let t
let currentDateTime = moment()
let currentDateTimeFormatted = currentDateTime.format(`ddd, ll`)

const USER_ID = Number(timeblockHTMLContainer.dataset.userid) || undefined
const startTime = Number(timeblockHTMLContainer.dataset.startTime) || 9

init()

function init() {
	// display current date&time on page header
	currentDayHTMLElement.textContent = currentDateTimeFormatted
	setInterval(() => {
		currentDayHTMLElement.textContent = currentDateTimeFormatted
	}, 60000)

	generateTimeSlots()
}

function handleSettingsButton(e) {
	e.stopPropagation()
	callSettingsModal()
}

function callSettingsModal() {
	settingsModal.style.display = "block" // immediately displaying the modal when called

	function handleWindowEvents(ev) {
		// console.log(ev.target.id)
		if (
			ev.target.id !== settingsModal.id ||
			ev.target.id !== timeSettingsButton.id
		) {
			settingsModal.style.display = "none"
			return window.removeEventListener("click", handleWindowEvents)
		}
	}

	// When the user clicks anywhere outside of the modal, it closes it
	window.addEventListener("click", handleWindowEvents)
}

function handleDateRowEvents(e) {
	e.stopPropagation()
	let el = e.target
	let parentElement = el.parentElement

	switch (el.id || parentElement.id) {
		case `leftChevron`:
			currentDateTime = moment(currentDateTime).subtract(1, `day`)
			break
		case `currentDay`:
			// alert(`Today is: ` + currentDateTime)
			break
		case `rightChevron`:
			currentDateTime = moment(currentDateTime).add(1, `day`)
			break
	}

	generateTimeSlots()
	currentDayHTMLElement.textContent = currentDateTime.format(`ddd, ll`)
}
function printNoteContentToDOM(note) {
	const currentTextareaElement = document.getElementById(
		`textarea-${note.datestamp}`,
	)
	if (currentTextareaElement) {
		currentTextareaElement.value = note.content
	}
}

function printSavedData() {
	// currently placing userid in element via handlebars
	API.getUserNotes(USER_ID).then(userNotes => {
		userNotes.forEach(printNoteContentToDOM)
	})
}

function cleanTimeBlocks() {
	// save all timeblock HTML elements in array
	const timeblockElements = [...timeblockHTMLContainer.children]

	// ?? May be able to get done organically in "generation" function
	// for each timeblock
	timeblockElements.forEach(elem => {
		// find the textarea remove id and reset class to "col note-slots"
		// by removing any dynamic background colors
		const elemTextarea = elem.querySelector("textarea")
		elemTextarea.classList.remove("bg-future")
		elemTextarea.classList.remove("bg-past")
		elemTextarea.classList.remove("bg-current")
		// clear any textcontent or values
		elemTextarea.textContent = ""
		elemTextarea.value = ""
		// remove disabled prop
		elemTextarea.disabled = false
		// find the save button and return to default icon
		// remove disabled prop
		const elemSaveButton = elem.querySelector("button")
		elemSaveButton.classList.remove("fa-hdd-o")
		elemSaveButton.classList.remove("bg-past")
		elemSaveButton.disabled = false
	})
	//
}
function generateTimeSlots(
	time = startTime,
	amount = 9,
	input = `enter your plans here`,
) {
	cleanTimeBlocks()
	for (let i = 0; i < amount; i++) {
		let timePrint, str, dateTime
		const htmlTimeBlock = document.getElementById(`timeblock-${i}`)
		const hDisplay = htmlTimeBlock.querySelector("section")
		const textDisplay = htmlTimeBlock.querySelector("textarea")
		const saveButton = htmlTimeBlock.querySelector("button")

		// keeping a clean ISO date record to match datestamp
		// moment().set(Object(String, Int));
		dateTime = moment(currentDateTime)
			.set({ h: time, m: 0, s: 0, ms: 0 })
			.format()

		if (time > 24) {
			timePrint = moment(
				`0101T${time - 24 <= 9 ? `0${time - 24}` : time - 24}:00`,
			).format(`hhA`)
			str = moment(currentDateTime).add(1, "day").format(`YYYYMMDD`)
		} else if (time >= 10) {
			str = moment(currentDateTime).format(`YYYYMMDD`)

			timePrint = moment(`0101T${time}:00`).format(`hhA`)
		} else {
			str = moment(currentDateTime).format(`YYYYMMDD`)
			timePrint = moment(`0101T0${time}:00`).format(`hhA`)
		}

		// quick check between current time and time displayed in planner
		let dateNow = moment().format(`YYYYMMDDHH`)
		let dateStamp = str + time.toString().padStart(2, "0")

		// appending a span inside the hour display div
		// in order to bring up the time against the minute line
		hDisplay.firstChild.textContent = timePrint

		textDisplay.id = `textarea-${dateStamp}`
		textDisplay.placeholder = input
		textDisplay.dataset.datestamp = dateStamp
		textDisplay.dataset.datetime = dateTime

		saveButton.id = `saveBtn-${dateStamp}`
		saveButton.dataset.datestamp = dateStamp
		saveButton.dataset.datetime = dateTime

		if (dateStamp === dateNow) {
			textDisplay.classList.add(`bg-current`)
			// adding a line relative to newly added "time slot" row
			// line represents the minute relative to the hour segment it is in
			// newRow.prepend(
			// 	$(
			// 		`<div id="current-time-line" style="top: ${
			// 			moment().format(`m`) * 1.6666666666666666667
			// 		}%;">`,
			// 	),
			// )
		} else if (dateStamp < dateNow) {
			saveButton.classList.add(`bg-past`)
			saveButton.classList.add(`fa`)
			saveButton.classList.add(`fa-hdd-o`)
			textDisplay.removeAttribute(`placeholder`)
			textDisplay.disabled = true
			saveButton.disabled = true
		} else {
			textDisplay.classList.add(`bg-future`)
		}

		time++
	}
	printSavedData()
	// localStorage.setItem(`storedSlotData`,JSON.stringify(storedSlotData))
}

function savetoDBStorage(note) {
	API.postNote(note)
	printNoteContentToDOM(note)
}

function handleTimeblockEvents(e) {
	e.stopPropagation()
	let el = e.target

	switch (el.title) {
		case `saveBtn`:
			var buttonDateStamp = el.attributes[`data-datestamp`].value
			var buttonDateTime = el.attributes[`data-datetime`].value
			var noteTextarea = document.getElementById(`textarea-${buttonDateStamp}`)
			var noteContent = noteTextarea.value
			var noteStamp = noteTextarea.dataset.datestamp || buttonDateStamp
			var note = {
				title: noteStamp,
				content: noteContent,
				datestamp: noteStamp,
				datetime: buttonDateTime,
				UserId: USER_ID, // currently placing it in element via handlebars
			}
			savetoDBStorage(note)
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
}

timeSettingsButton.addEventListener(`click`, handleSettingsButton)
timeblockHTMLContainer.addEventListener(`click`, handleTimeblockEvents)
dateRowHTMLElement.addEventListener(`click`, handleDateRowEvents)
