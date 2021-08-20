export default function openMenu() {

}

const menuOpen = document.querySelector('.img-open')
const menuMobile = document.querySelector('.menu-mobile')
const menuClose = document.querySelector('.img-close')


const events = ['click', 'touchstart']

events.forEach(event => {
    function handleOpenMenu(event) {
        menuOpen.classList.add('active')
        menuMobile.classList.add('active')
    }

    function handleColseMenu(event) {
        menuOpen.classList.remove('active')
        menuMobile.classList.remove('active')

    }
    menuOpen.addEventListener(event, handleOpenMenu)
    menuClose.addEventListener(event, handleColseMenu)
})