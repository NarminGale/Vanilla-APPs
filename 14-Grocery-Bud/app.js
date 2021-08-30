// select items
const alert = document.querySelector('.alert') //
const form = document.querySelector('.grocery-form') //
const grocery = document.getElementById('grocery') //
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list') //
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editID = ''

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const value = grocery.value
  const id = new Date().getTime().toString()
  if (value && !editFlag) {
    const element = document.createElement('article')
    // add class
    element.classList.add('grocery-item')
    // add id
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `<span class="title">${value}</span>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`

    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')

    deleteBtn.addEventListener('click', deleteItem)
    editBtn.addEventListener('click', editItem)

    //append child
    list.appendChild(element)
    // display alert
    displayAlert('item added to the list', 'success')
    // show container
    container.classList.add('show-container')
    // add to local storage
    addToLocalStorage(id, value)
    // set back to default
    setBackToDefault()
  } else if (value && editFlag) {
    editElement.innerHTML = value
    displayAlert('value changed', 'success')
    // edit local storage
    editLocalStorage(id, value)
    setBackToDefault()
  } else {
    displayAlert('please enter value', 'danger')
  }
})

// clear items
clearBtn.addEventListener('click', function () {
  const items = document.querySelectorAll('.grocery-item')

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item)
    })
  }

  container.classList.remove('show-container')
  displayAlert('empty list', 'danger')
  setBackToDefault()
  // localStorage.removeItem('list')
})

// display alert
function displayAlert(text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  // remove alert
  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
  }, 1500)
}

// set back to default
function setBackToDefault() {
  grocery.value = ''
  editFlag = false
  editID = ''
  submitBtn.textContent = 'submit'
}

// delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  list.removeChild(element)
  console.log(list.children)
  if (list.children.length === 0) {
    container.classList.remove('show-container')
  }

  displayAlert('item removed', 'danger')
  setBackToDefault()
  // remove from local storage
  removeFromLocalStorage(id)
}

// edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling
  // set form value
  grocery.value = editElement.innerHTML
  editFlag = true
  editID = element.dataset.id

  submitBtn.textContent = 'edit'
}

// set back to default
function addToLocalStorage(id, value) {
  const grocery = { id, value }

  let items = getLocalStorage()
  items.push(grocery)

  localStorage.setItem('list', JSON.stringify(items))
}

function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage()

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item
    }
  })
}

function editLocalStorage(id, value) {
  let items = getLocalStorage()
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value
    }
    return item
    localStorage.setItem('list', JSON.stringify(items))
  })
}

// clearBtn.addEventListener('click', function () {
//   listItems.splice(0, listItems.length)
//   groceryList.innerHTML = ''
// })

// groceryList.addEventListener('click', function (e) {
//   if (e.target.className === 'fas fa-trash') {
//     e.target.parentElement.parentElement.parentElement.remove()
//   }
//   if (e.target.className === 'fas fa-edit') {
//     const vallu = e.target.parentElement.parentElement.parentElement.innerText
//     input.value = vallu
//   }
// })

// function addListItem(item) {
//   const addItem = `<article class="grocery-item">
//               <p class="title">${item}</p>
//               <div class="btn-container">
//                 <button type="button" class="edit-btn">
//                   <i class="fas fa-edit"></i>
//                 </button>
//                 <button type="button" class="delete-btn">
//                   <i class="fas fa-trash"></i>
//                 </button>
//               </div>
//             </article>`

//   groceryList.innerHTML += addItem
//   input.value = ''
// }
// function getfromStorage() {
//   let bud
//   if (localStorage.getItem('bud') === null) {
//     bud = []
//   } else {
//     bud = JSON.parse(localStorage.getItem('bud'))
//   }
//   return bud
// }
// function addListItemStorage(lI) {
//   let bud = getfromStorage()
//   bud.push(lI)
//   localStorage.setItem('bud', JSON.stringify(bud))
// }

// function showAlert(type, message) {
//   const alert = document.createElement('p')
//   alert.className = `alert ${type}`
//   alert.textContent = message
//   groceryForm.appendChild(alert)

//   setTimeout(function () {
//     alert.remove()
//   }, 2000)
// }
