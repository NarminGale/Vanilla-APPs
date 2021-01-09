let count = 0

// select the elements
const value = document.querySelector('.value')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')

// events
decrease.addEventListener('click', function () {
  count--
  value.innerText = count
  checkValue(value)
})
reset.addEventListener('click', function () {
  count = 0
  value.innerText = count
  checkValue(value)
})
increase.addEventListener('click', function () {
  count++
  value.innerText = count
  checkValue(value)
})

// functions
function checkValue(a) {
  if (count > 0) {
    document.querySelector('.value').style.color = 'green'
  } else if (count < 0) {
    document.querySelector('.value').style.color = 'red'
  } else {
    document.querySelector('.value').style.color = 'black'
  }
}
