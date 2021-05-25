// start..
const mainContainer = document.getElementById("mainContentContainer")
const navSignupLink = document.getElementById("nav-signup-link")
const navLoginLink = document.getElementById("nav-login-link")
const navLogoutLink = document.getElementById("nav-logout-link")
const navDashboardLink = document.getElementById("nav-dashboard-link")
import "../_css/style.css"

if (mainContainer && mainContainer.dataset.receivedSession === "true") {
	// hide when signed in
	navSignupLink.style.display = "none"
	navLoginLink.style.display = "none"

	// show when signed in
	navLogoutLink.style.display = ""
	navDashboardLink.style.display = ""
}
