console.log("hello from main.js")

const navSlide = () => {
  const nav = document.getElementById('navLinks')
  const burger = document.getElementById('burger')
  const overlay = document.getElementById('overlay')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active')
    burger.classList.toggle('burger--active')
    overlay.classList.toggle('overlay--active')
  })

  overlay.addEventListener('click', () => {
    nav.classList.toggle('nav--active')
    burger.classList.toggle('burger--active')
    overlay.classList.toggle('overlay--active')
  })
}

navSlide()