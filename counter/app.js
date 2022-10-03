const displayCounter = document.querySelector("#counter-display")
const buttons = document.querySelectorAll("button")

let count = 0

for (let button of buttons) {
	button.addEventListener("click", (e) => {
		const selectedBtn = e.currentTarget.classList
		if (selectedBtn.contains("decrease")) {
			count--
		} else if (selectedBtn.contains("increase")) {
			count++
		} else {
			count = 0
		}

		color(count)
	})
}

const color = (num) => {
	if (num > 0) {
		displayCounter.style.color = "green"
	} else if (num < 0) {
		displayCounter.style.color = "red"
	} else {
		displayCounter.style.color = "black"
	}
	displayCounter.innerText = num
	return num
}
