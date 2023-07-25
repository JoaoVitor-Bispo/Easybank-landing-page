const menu = document.querySelector('#menu');
const links = [...document.querySelectorAll('.header-links')]

let menuImage = false
const newDiv = document.createElement('div');
newDiv.id = 'linksHidden'

menu.addEventListener('click', (e) => {
    if(document.documentElement.offsetWidth <= '900') {
        [...newDiv.childNodes].map(element => element.remove())
        menuImage === false ? menuImage = true : menuImage = false
        
        if(menuImage === true) {
            menu.src = '/images/icon-close.svg'
            
            links.map((element) => {
                const newLinks = document.createElement('a')
                newLinks.textContent = element.textContent
                newLinks.href = element.href
                newDiv.appendChild(newLinks)
            })
            
            document.documentElement.append(newDiv)
            document.querySelector('.images').style.opacity = '0.4'    
        }
        else {
            menu.src = '/images/icon-hamburger.svg'
            document.querySelector('.images').style.opacity = '1'    
            newDiv.remove()
        }
    }
})