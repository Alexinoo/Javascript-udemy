import $ from './utils/getElement.js'
import getUser from './utils/fetchUser.js'


// select Elements
const imgElmnt = $('.user-img')
const userTitleParaElmnt = $('.user-title')
const uservalueParaElmnt = $('.user-value')
const randomUserBtnElmnt = $('.btn')

const iconElmnts = [...document.querySelectorAll('.icon')]


const showUser = async()=>{
    //get user from api 
    const person = await getUser()
    console.log(person);

    //display user
}

window.addEventListener('DOMContentLoaded',showUser)
randomUserBtnElmnt.addEventListener('click',showUser)