const button = document.querySelector( '#btn' )
const bgMain = document.querySelector( 'main' )
const bgColor = document.querySelector( '#color' )

button.addEventListener( 'click', ()  => {
    const newColor = randomColor()
    bgMain.style.backgroundColor = newColor
    bgColor.innerText = newColor
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor( Math.random() * 255 )
    
    return `rgb(${r}, ${g}, ${b})`
}

