console.log("hello from main.js")

const drawer = document.getElementById('drawer')
const drawerCover = document.getElementById('drawerCover')
const drawerIcon = document.getElementById('drawerIcon')

drawerIcon.addEventListener('click', () => {
  drawer.classList.toggle('drawer--active')
  drawerCover.classList.toggle('drawer-cover--active')
})

drawerCover.addEventListener('click', () => {
  drawer.classList.toggle('drawer--active')
  drawerCover.classList.toggle('drawer-cover--active')
})