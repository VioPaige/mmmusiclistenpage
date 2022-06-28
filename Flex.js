document.addEventListener('DOMContentLoaded', () => {

    const navHamburgerButton = document.getElementById('navhamburger')
    const navButtonDiv = document.getElementById('navbuttondiv')

    navHamburgerButton.addEventListener('click', () => {

        navButtonDiv.classList.toggle('active')

    })

})