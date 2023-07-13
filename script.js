const menu = document.querySelector('#menu');
const otherLinks = [...document.getElementsByClassName('header-links')];
let menuImage = false

menu.addEventListener('click', (e) => {
    const newDiv = document.createElement('div');
    newDiv.id = 'linksHidden'

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
        newDiv.remove()
    }
})