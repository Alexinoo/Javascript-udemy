import $ from './utils/getElement.js'

const url = 'https://randomuser.me/api/'

// select Elements
const imgElmnt = $('.user-img')
const userTitleParaElmnt = $('.user-title')
const uservalueParaElmnt = $('.user-values')
const randomUserBtn = $('.btn')

const iconElmnts = [...document.querySelectorAll('.icon')]

console.log(iconElmnts);