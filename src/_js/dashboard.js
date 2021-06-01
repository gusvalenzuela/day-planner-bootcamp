import "../_css/dashboard.css"
import API from "../utils/API"

const leftSide = document.querySelectorAll(`.left-side`)
const accountSettingsBtn = document.getElementById(`buttonAccount`)
const plannerSettingsBtn = document.getElementById(`buttonPlanner`)
const startHourForm = document.getElementById(`startHourForm`)
const startHourSelection = document.getElementById(`startHour`)
const userStartTime = startHourSelection.dataset.startHour

init()

function init() {
	// find all options and save in array
	const startHourSelectionOptions = [...startHourSelection.children]
	// filter out the corresponding option to the default "start time"
	// and set it as selected
	startHourSelectionOptions.filter(
		o => Number(o.value) === Number(userStartTime),
	)[0].selected = true

	// add eventListeners to the different "settings tabs"
	leftSide.forEach(side => {
		side.addEventListener(`click`, evt => {
			switch (evt.target.id) {
				case plannerSettingsBtn.id:
					accountSettingsBtn.classList.remove(`active`)
					plannerSettingsBtn.classList.add(`active`)
					document.getElementById(`planner-settings`).style.display = ""
					document.getElementById(`account-settings`).style.display = "none"
					break

				case accountSettingsBtn.id:
					plannerSettingsBtn.classList.remove(`active`)
					accountSettingsBtn.classList.add(`active`)
					document.getElementById(`account-settings`).style.display = ""
					document.getElementById(`planner-settings`).style.display = "none"
					break

				default:
					break
			}
		})
	})
}
function handleStartHourFormEvent(e) {
	e.preventDefault()
	API.postNewStartHour(startHourSelection.value).then(datum =>
		console.log(datum),
	)
}

startHourForm.addEventListener("submit", handleStartHourFormEvent)
