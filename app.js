const image = document.getElementsByTagName('img')

const icon = './asset/icon.png'

const addIcon = Array

for (let i = 0; i < image.length; i++) {
    addIcon[i] = document.createElement('img')
    addIcon.src = icon
    document.body.appendChild(addIcon)
}






// addIcon.setAttribute("src", icon)

// console.log(image)

// let i = image.length

// const forEachImage = (i) => {
//     const addIcon = document.createElement('img')
//     addIcon.setAttribute("src", icon)
//     console.log('hello')
// }

// forEachImage()

