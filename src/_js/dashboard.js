// import moment from "moment"
import $ from "jquery"
import API from "../utils/API"

const containerRow = $(`#containerRow`)

init()

function init() {
	$(containerRow).data(`userid`)

	API.getUserNotes($(containerRow).data(`userid`)).then(data => {
		console.log(data)
	})
}
