// import moment from "moment"
import $ from "jquery"
import API from "../utils/API"

const accountContainer = document.querySelector(`#account-settings`)
const leftSide = document.querySelectorAll(`.left-side`)
const accountSettingsBtn = document.querySelector(`#button-account`)
const plannerSettingsBtn = document.querySelector(`#button-planner`)

init()

function init() {
	$(accountContainer).data(`userid`)

	API.getUserNotes($(accountContainer).data(`userid`)).then(data => {
		$(accountContainer).data(`notes`, data.data[0])
	})

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
