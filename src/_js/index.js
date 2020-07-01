// start..
const activeSession = $(`#mainContentContainer`).data(`received-session`)
import $ from "jquery"

if (activeSession) {
	// hide when signed in
	$(`#nav-signup-link`).hide()
	$(`#nav-login-link`).hide()

	// show when signed in
	$(`#nav-logout-link`).show()
	$(`#nav-dashboard-link`).show()
}
