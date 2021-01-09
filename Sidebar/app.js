// select items
const sidebarBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-button')
const sidebar = document.querySelector('.sidebar')

const checkClass = sidebar.classList

sidebarBtn.addEventListener('click', function () {
  if (checkClass.contains('show-sidebar')) {
    checkClass.remove('show-sidebar')
  } else {
    checkClass.add('show-sidebar')
  }
})
closeBtn.addEventListener('click', function () {
  checkClass.remove('show-sidebar')
})
