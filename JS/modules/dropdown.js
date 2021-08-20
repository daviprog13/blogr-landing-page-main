export default function initiDropdown() {

}

const product = document.querySelector('[data-products]')
const company = document.querySelector('[data-company]')
const conect = document.querySelector('[data-conect]')

function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outSideClick(this, () => {
        this.classList.remove('active')

    })
}

function outSideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener('click', onClickOutside)

    function onClickOutside(event) {
        if (!element.contains(event.target)) {
            callback()
        }
    }
}

product.addEventListener('click', handleClick)
company.addEventListener('click', handleClick)
conect.addEventListener('click', handleClick)