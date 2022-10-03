const homepage = document.querySelector(".homepage")
const homeBtn = document.querySelector(".btn")
const loginModal = document.querySelector(".login-container")
const closeIcon = document.querySelector(".close-icon")
const showPassword = document.getElementById("showPassword")
const password = document.getElementById("password")


homeBtn.addEventListener("click", () => {
	homepage.classList.add("active")
	loginModal.classList.remove("active")
})

closeIcon.addEventListener("click", () => {
	loginModal.classList.add("active")
	homepage.classList.remove("active")
})

showPassword.addEventListener("change", () => {
	if (password.type === "password") {
		password.type = "text"
	} else {
		password.type = "password"
	}
})




