export default function initiMenuMobile() {

}

const linkMenus = document.querySelectorAll('.menu-mobile-itens')
linkMenus.forEach(link => {

    function handleEvent(event) {

        this.classList.add('active')

        function removeEvent(event) {
            this.classList.remove('active')

        }
        link.addEventListener('mouseout', removeEvent)
    }
    link.addEventListener('mouseover', handleEvent)


})