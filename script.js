const menu = document.querySelector('#menu');
const otherLinks = [...document.getElementsByClassName('header-links')];

const newDiv = document.createElement('div');
let menuImage = false
newDiv.id = 'linksHidden'

menu.addEventListener('click', (e) => {
    menuImage === false ? menuImage = true : menuImage = false
    
    if(menuImage === true) {
        menu.src = '/images/icon-close.svg'

        otherLinks.map((element) => {
            newDiv.appendChild(element)
        })
    
        document.documentElement.append(newDiv)
        document.querySelector('.images').style.opacity = '0.4'    
    }
    else {
        menu.src = '/images/icon-hamburger.svg'
        document.querySelector('.images').style.opacity = '1'    
        newDiv.remove()
    }
})