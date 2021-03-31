// Denna fil skall innehålla JavaScript (JS)
const nav = document.querySelector('.navLinks')
const  meny = document.querySelector('.meny')

function toggleMeny() {
    nav.classList.toggle('navActive')
    meny.classList.toggle('toggle')
}

meny.addEventListener('click', toggleMeny)