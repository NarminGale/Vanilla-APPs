// set date
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// close navbar links
const toggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

toggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})
// fixed navbar
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function () {
  const navbarHeight = navbar.getBoundingClientRect().height
  const scrollHeight = window.pageYOffset

  if (scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})

// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    // heights
    const navbarHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navbarHeight

    if (!fixedNav) {
      position -= navbarHeight
    }
    if (navbarHeight > 82) {
      position += containerHeight
    }
    window.scrollTo({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0
  })
})
