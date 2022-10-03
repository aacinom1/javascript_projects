// local reviews data
const reviews = [
	{
		id: 1,
		name: "User 1",
		job: "web developer",
		img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		text: "I was always fascinated seeing how web works so I started web development courses. Very soon, I realized it is my passion and I am very happy to be in this journey.",
	},
	{
		id: 2,
		name: "User 2",
		job: "web designer",
		img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
		text: "Designing a web is the first step for the development process. Visualising the application is the most exciting part for me",
	},
	{
		id: 3,
		name: "User 3",
		job: "intern",
		img: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		text: "The company provided a space to learn and work efficiently. It helped me to grow in many aspects. I got to learn from the very best team. Thank you all.",
	},
	{
		id: 4,
		name: "User 4",
		job: "project manager",
		img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		text: "I would like to thank all of the team for the hard work over the years, they have always responded quickly by solving any issue that our company have had.  ",
	},
]

const name = document.getElementById("name")
const image = document.getElementById("person")
const position = document.getElementById("position")
const review = document.getElementById("review")

const prevBtn = document.querySelector("#left-btn")
const nextBtn = document.querySelector("#right-btn")
const random = document.querySelector("#random-btn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", () => {
	personReviewList(currentItem)
})

function personReviewList() {
	const reviewList = reviews[currentItem]
	image.src = reviewList.img
	name.textContent = reviewList.name.toUpperCase()
	position.textContent = reviewList.job
	review.textContent = reviewList.text
}

document.addEventListener("keydown", (e) => {
	if (e.keyCode === 37) {
		currentItem--
		if (currentItem < 0) {
			currentItem = reviews.length - 1
		}
	}
	if (e.keyCode === 39) {
		currentItem++
		if (currentItem > reviews.length - 1) {
			currentItem = 0
		}
	}
    personReviewList(currentItem)
})


prevBtn.addEventListener("click", () => {
	currentItem--
	if (currentItem < 0) {
		currentItem = reviews.length - 1
	}
	personReviewList(currentItem)
})

nextBtn.addEventListener("click", () => {
	currentItem++
	if (currentItem > reviews.length - 1) {
		currentItem = 0
	}
	personReviewList(currentItem)
})
