import $ from './utils/getElement.js'
import getUser from './utils/fetchUser.js'
import displayUser from './utils/displayUser.js'

// select Element
const randomUserBtnElmnt = $('.btn')



const showUser = async()=>{
    //get user from api 
    const person = await getUser()
    // console.log(person);

    //display user
    displayUser(person)
}

window.addEventListener('DOMContentLoaded',showUser)
randomUserBtnElmnt.addEventListener('click',showUser)