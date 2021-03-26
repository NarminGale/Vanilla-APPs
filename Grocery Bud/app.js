const input = document.getElementById('grocery') //
const submitBtn = document.querySelector('.submit-btn')
const groceryForm = document.querySelector('.grocery-form') //
const groceryList = document.querySelector('.grocery-list') //
const clearBtn = document.querySelector('.clear-btn')
const editBtn = document.querySelectorAll('.edit-btn')
const deleteBtn = document.querySelectorAll('.delete-btn')
const groceryItem = document.querySelector('.grocery-item')
const containerCenter = document.querySelector('.container-center')

groceryForm.addEventListener('submit', function (e) {
  const listItem = input.value.trim()

  if (listItem === '') {
    showAlert('danger', 'Please add a one...')
  } else {
    addListItem(listItem)
    addListItemStorage(listItem)

    showAlert('success', 'You add successfully...')
  }
  e.preventDefault()
})

clearBtn.addEventListener('click', function () {
  listItems.splice(0, listItems.length)
  groceryList.innerHTML = ''
})

groceryList.addEventListener('click', function (e) {
  if (e.target.className === 'fas fa-trash') {
    e.target.parentElement.parentElement.parentElement.remove()
  }
  if (e.target.className === 'fas fa-edit') {
    const vallu = e.target.parentElement.parentElement.parentElement.innerText
    input.value = vallu
  }
})

function addListItem(item) {
  const addItem = `<article class="grocery-item">
              <p class="title">${item}</p>
              <div class="btn-container">
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </article>`

  groceryList.innerHTML += addItem
  input.value = ''
}
function getfromStorage() {
  let bud
  if (localStorage.getItem('bud') === null) {
    bud = []
  } else {
    bud = JSON.parse(localStorage.getItem('bud'))
  }
  return bud
}
function addListItemStorage(lI) {
  let bud = getfromStorage()
  bud.push(lI)
  localStorage.setItem('bud', JSON.stringify(bud))
}

function showAlert(type, message) {
  const alert = document.createElement('p')
  alert.className = `alert ${type}`
  alert.textContent = message
  groceryForm.appendChild(alert)

  setTimeout(function () {
    alert.remove()
  }, 2000)
}
