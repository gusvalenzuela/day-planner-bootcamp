import "core-js/stable/promise"
import "regenerator-runtime/runtime"

export default {
	// NYT Archive Article

	getUserNotes: async function () {
		return await fetch("/api/notes").then(r => r.json())
	},

	postNote: async function (note) {
		return await fetch("/api/notes", {
			method: "POST",
			body: JSON.stringify(note),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then(r => r.json())
	},

	postNewStartHour: async function (hour) {
		return await fetch(`/api/settings${hour}`, {
			method: "POST",
		}).then(r => r.json())
	},
}
