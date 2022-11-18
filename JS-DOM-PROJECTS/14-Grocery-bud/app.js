
// ****** SELECT ITEMS **********

const alertParagraphElmnt = document.querySelector('.alert')
const formElmnt = document.querySelector('.grocery-form')
const groceryInputElmnt = document.getElementById('grocery')
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
        console.log('add item to the list');
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

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
