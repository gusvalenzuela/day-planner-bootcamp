import "core-js/stable/promise"
import "regenerator-runtime/runtime"

export default {
	// NYT Archive Article

	getUserNotes: async function () {
		return await fetch("/api/notes").then(r => r.json())
	},
}
