const menu = document.querySelector('#menu');
const links = [...document.querySelectorAll('.header-links')]

let menuImage = false
const newDiv = document.createElement('div');
newDiv.id = 'linksHidden'

menu.addEventListener('click', (e) => {
    menuImage === false ? menuImage = true : menuImage = false
    
    if(menuImage === true) {
        menu.src = './images/icon-close.svg'
        
        links.map((element) => {
            const newLinks = document.createElement('a')
            newLinks.textContent = element.textContent
            newLinks.href = element.href
            newDiv.appendChild(newLinks)
        })
        
        document.documentElement.append(newDiv)
        document.querySelector('.images').style.opacity = '0.4'
        return 0
    }
    menu.src = '/images/icon-hamburger.svg'
    document.querySelector('.images').style.opacity = '1'    
    newDiv.remove()
})