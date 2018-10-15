const menu = document.getElementById('menu')
const nav = document.getElementById('nav')

menu.addEventListener('click', function () {
  menu.classList.toggle('close')
  nav.classList.toggle('active')
})
