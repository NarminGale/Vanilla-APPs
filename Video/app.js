const sOn = document.querySelector('.switch-on')
const sOFF = document.querySelector('.switch-off')
const video = document.querySelector('.video-container')
const preloader = document.querySelector('.preloader')

sOn.addEventListener('click', function () {
  video.play()
})

sOFF.addEventListener('click', function () {
  video.pause()
})

window.addEventListener('DOMContentLoaded', function () {
  preloader.classList.add('hide-preloader')
})
