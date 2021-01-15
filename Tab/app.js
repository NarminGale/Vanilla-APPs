const btns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')
const about = document.querySelector('.about')
const aboutContent = document.querySelector('.about-content')

about.addEventListener('click', function (e) {
  const btnID = e.target.dataset.id
  let classBtn = e.target.classList

  if (btnID) {
    btns.forEach(function (btn) {
      btn.classList.remove('active')
      classBtn.add('active')
    })
    contents.forEach(function (content) {
      if (content.id === btnID) {
        aboutContent.innerHTML = content.innerHTML
      }
    })
  }
})
