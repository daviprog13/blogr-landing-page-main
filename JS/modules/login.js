export default function initiLogin() {
    const containerLogin = document.querySelector('.container-login')
    const btnX = document.querySelector('.btn-login')
    const logins = document.querySelectorAll('[data-login]')
    const events = ['click', 'touchstart']
    logins.forEach(login => {
        events.forEach(event => {
            function handleOpenLogin(event) {
                event.preventDefault()
                containerLogin.classList.add('active')
            }
            login.addEventListener(event, handleOpenLogin)

            function handleCloseLogin() {
                containerLogin.classList.remove('active')
            }
            btnX.addEventListener(event, handleCloseLogin)

            function handleCloseOutside(event) {

                if (event.target === this) {
                    containerLogin.classList.remove('active')
                }
            }
            containerLogin.addEventListener(event, handleCloseOutside)
        })
    })
}