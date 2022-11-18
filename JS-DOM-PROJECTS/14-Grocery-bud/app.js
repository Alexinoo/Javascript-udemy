
// ****** SELECT ITEMS **********

const alertParagraphElmnt = document.querySelector('.alert')
const formElmnt = document.querySelector('.grocery-form')
const groceryInputElmnt = document.getElementById('grocery')
const submitBtnElmnt = document.getElementById('.submit-btn')
const groceryContElmnt = document.querySelector('.grocery-container')
const groceryListElmnt = document.querySelector('.grocery-list')
const editBtnElmnt = document.querySelector('.edit-btn')
const deleteBtnElmnt = document.querySelector('.delete-btn')

const clearBtnElmnt = document.querySelector('.clear-btn')



// edit option
let editElement
let isEditing = false
let editId = ''


// ****** EVENT LISTENERS **********
// submit form

formElmnt.addEventListener('submit',addItem)


// ****** FUNCTIONS **********

function addItem(e){
    e.preventDefault();
    const groceryValue = groceryInputElmnt.value

    // generate unique id for added item
    const id = new Date().getTime().toString()
    
    if(groceryValue && !isEditing ){

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
        // append to div.grocery-list
        groceryListElmnt.appendChild(articleElement)

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
        console.log('editing');
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


// ****** LOCAL STORAGE **********
function addToLocalStorage(id,grocery){
    console.log('added to local storage');
}

// ****** SETUP ITEMS **********
