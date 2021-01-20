const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const release = document.querySelector('.release')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

// year month date hours minutes seconds
const futureDate = new Date(2021, 12, 11, 10, 30, 0)

const year = futureDate.getFullYear()
const date = futureDate.getDate()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
let weekday = futureDate.getDay()
weekday = weekdays[weekday]

release.textContent = `Release coming on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`

const futureTime = futureDate.getTime()

function getTime() {
  const today = new Date().getTime()
  const difference = futureDate - today
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }

  //   items[0].innerHTML = format(days)
  //   items[1].innerHTML = format(hours)
  //   items[2].innerHTML = format(minutes)
  //   items[3].innerHTML = format(seconds)

  const values = [days, hours, minutes, seconds]
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })

  if (difference < 0) {
    clearInterval(update)
    deadline.innerHTML = 'Time Up'
  }
}
const updateTime = setInterval(getTime, 1000)
