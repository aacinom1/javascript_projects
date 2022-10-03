const btn = document.querySelector(".btn")
const input = document.getElementById("input")
const copyIcon = document.querySelector(".fa-copy")
const alertContainer = document.querySelector(".alert-container")

btn.addEventListener("click", () => {
	createPassword()
})

copyIcon.addEventListener("click", () => {
	copyPassword()
	if (input.value) {
		alertContainer.classList.remove("active")
		setTimeout(() => {
			alertContainer.classList.add("active")
		}, 2000)
	}
})

function createPassword() {
	const chars =
		"0123456789abcdefghijklmnopqrstuvwxyz!@#$&*._?:ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const passwordLength = 12
	let password = ""
	for (let index = 0; index < passwordLength; index++) {
		const randNum = Math.floor(Math.random() * chars.length)
		password += chars.substring(randNum, randNum + 1)
		console.log(randNum, password)
	}
	input.value = password
}

function copyPassword() {
	input.select()
	input.setSelectionRange(0, 9999) // Only used when using in mobile device
	navigator.clipboard.writeText(input.value)
}
