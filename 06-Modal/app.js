// select items

const btn = document.querySelector('.modal-button')
const closeBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay')

btn.addEventListener('click', function () {
  modalOverlay.style.zIndex = '10'
  modalOverlay.style.visibility = 'visible'
})
closeBtn.addEventListener('click', function () {
  modalOverlay.style.zIndex = '-10'
  modalOverlay.style.visibility = 'hidden'
})
