// select items
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  const findClass = links.classList
  if (findClass.contains('show-links')) {
    findClass.remove('show-links')
  } else {
    findClass.add('show-links')
  }
  //   links.classList.toggle('show-links')
})
