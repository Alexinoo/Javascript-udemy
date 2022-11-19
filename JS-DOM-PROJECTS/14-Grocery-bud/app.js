
// ****** SELECT ITEMS **********

const alertParagraphElmnt = document.querySelector('.alert')
const formElmnt = document.querySelector('.grocery-form')
const groceryInputElmnt = document.getElementById('grocery')
const submitBtnElmnt = document.querySelector('.submit-btn')
const groceryContElmnt = document.querySelector('.grocery-container')
const groceryListElmnt = document.querySelector('.grocery-list')
const clearBtnElmnt = document.querySelector('.clear-btn')



// edit option
let editElement
let isEditing = false
let editId = ''


// ****** EVENT LISTENERS **********
// submit form

formElmnt.addEventListener('submit',addItem)
clearBtnElmnt.addEventListener('click',clearItems)

// DOMContentLoaded - load items
window.addEventListener('DOMContentLoaded',setupItems)


// ****** FUNCTIONS **********

function addItem(e){
    e.preventDefault();
    const groceryValue = groceryInputElmnt.value

    // generate unique id for added item
    const id = new Date().getTime().toString()
    
    if(groceryValue && !isEditing ){

        createListElement(id , groceryValue)

        // display alert
         displayAlert('item added to the list','success')

        // add .show-container to show container
        groceryContElmnt.classList.add('show-container')

        //add to local storage
        addToLocalStorage(id,groceryValue)

        // set back to default
        setBackToDefault()

    }
    else if(groceryValue && isEditing){
        editElement.innerHTML = groceryValue
        displayAlert('grocery updated','success')

        // update local storage
        updateLocalStorage(editId,groceryValue)

        // set back to default
        setBackToDefault()
    }
    else{
        displayAlert('please enter value','danger')
    }
    
}

// display alert and remove after some seconds

function displayAlert(message,action){
    alertParagraphElmnt.textContent = message
    alertParagraphElmnt.classList.add(`alert-${action}`)

    //remove alert after 3seconds
    setTimeout(function(){
        alertParagraphElmnt.textContent = ''
        alertParagraphElmnt.classList.remove(`alert-${action}`)
    },2000)
}

// set back to default
function setBackToDefault(){
    groceryInputElmnt.value = ''
    isEditing = false
    editId = ''
    submitBtnElmnt.textContent = 'submit'

}

// clear items .. loop through the groceries added and remove child elements
// And then hide the grocery-container
// Display the alert
// clear localstorage
function clearItems(){
    const groceries = document.querySelectorAll('.grocery-item')
    
    if(groceries.length > 0){

        groceries.forEach(function(grocery){
            groceryListElmnt.removeChild(grocery)
    })

    }
    groceryContElmnt.classList.remove('show-container')
    displayAlert('all groceries deleted','success')
    localStorage.removeItem('grocery-list')
    setBackToDefault()

}

// delete function
// remove parent element i.e the article
// remove .show-container if there are no more groceries
function deleteItem(e){
    const deleteGrocery = e.currentTarget.parentElement.parentElement
    // get dataset-id on the article
    const id = deleteGrocery.dataset.id
    groceryListElmnt.removeChild(deleteGrocery)
    if(groceryListElmnt.children.length === 0){
        groceryContElmnt.classList.remove('show-container')
    }
    displayAlert('item removed','danger')
    setBackToDefault()

    // remove/delete from local storage
    deleteGroceryFromLocalStorage(id)
}


// edit function
function editItem(e){
    const editGrocery = e.currentTarget.parentElement.parentElement

    // set edit element
    editElement = e.currentTarget.parentElement.previousElementSibling
    
    // set form value
    groceryInputElmnt.value = editElement.innerHTML

    // set isEditing to true
    isEditing = true

    // set editID to dataset id
    editId = editGrocery.dataset.id

    // change submit to Edit
    submitBtnElmnt.textContent = 'edit'
}


/*******END OF FUNCTIONS **********/


// ****** LOCAL STORAGE **********
// methods available to us from localStorage API
// localStorage.setItem()
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clearItem()
function addToLocalStorage(id,grocery){
    const groceries = {id, grocery}

    let items = getItemsFromLocalStorage()
    items.push(groceries)
    localStorage.setItem('grocery-list',JSON.stringify(items))
}

function getItemsFromLocalStorage(){    
    // check if there are any items in the localstorage
    // If there are items .. return them
    // else return an empty array
    return localStorage.getItem('grocery-list') ? 
    JSON.parse(localStorage.getItem('grocery-list')) :
    []
}

function deleteGroceryFromLocalStorage(id){
    //get items from localStorage
    let items = getItemsFromLocalStorage()
    
    //return the items that do not match the id
    items = items.filter(function(item){
        return item.id !== id
    })
    // set back grocery-list to the new items / overwrite local storage
    localStorage.setItem('grocery-list',JSON.stringify(items))
}

function updateLocalStorage(id,grocery){
    //get items from Local Storage
    let items = getItemsFromLocalStorage()

    // use map - update the value with the matching id
    items = items.map(function(item){
        if(item.id === id ){
            item.grocery = grocery
        }
        return item
    })
    
    // set back grocery-list to the new items / overwrite local storage
    localStorage.setItem('grocery-list',JSON.stringify(items))
}

// ****** SETUP ITEMS **********

function setupItems(){
    // get items from local storage
    let items = getItemsFromLocalStorage()
    if(items.length > 0){
        items.forEach(function(item){
            createListElement(item.id , item.grocery)
        })
    groceryContElmnt.classList.add('show-container')
    }

}

// Restructured to a separate function

function createListElement(id,groceryValue){
     const articleElement = document.createElement('article')

        // add class
        articleElement.classList.add('grocery-item')

        //add attr
        const attr = document.createAttribute('data-id')
        attr.value = id

        // attach it to the element
        articleElement.setAttributeNode(attr)

        // add HTML
        articleElement.innerHTML = `
            <p class="title">${groceryValue}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
              <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
            `;
        // select edit and delete buttons
        const deleteBtnElmnt = articleElement.querySelector('.delete-btn')
        const editBtnElmnt = articleElement.querySelector('.edit-btn')

        deleteBtnElmnt.addEventListener('click',deleteItem)
        editBtnElmnt.addEventListener('click',editItem)

        // append to div.grocery-list
        groceryListElmnt.appendChild(articleElement)
}

