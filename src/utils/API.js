import axios from "axios"
import moment from "moment"

export default {
	// NYT Archive Article
	getArticle: function () {
		console.log(process.env)
		let randYear = Math.floor(Math.random() * (moment().year() - 1851)) + 1851 // articles begin in 1851
		const queryURI = `https://api.nytimes.com/svc/archive/v1/${randYear}/${moment().month()}.json?api-key=${
			process.env.NYT_API_KEY
		}`
		return axios.get(queryURI)
	},
	getUserNotes: function (id) {
		console.log(process.env)
		const queryURI = `/api/notes` + id
		return axios.get(queryURI)
	},
}
