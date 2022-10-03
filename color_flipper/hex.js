const button = document.querySelector("#btn")
const bgMain = document.querySelector("main")
const bgColor = document.querySelector("#color")

button.addEventListener("click", () => {
	const newColor = randomColor()
	bgMain.style.backgroundColor = newColor
	bgColor.innerText = newColor
})

const randomColor = () => {
	const hexColor = Math.floor(Math.random() * 16777215).toString(16)
	return `#${hexColor}`
}
