import $ from './getElement.js'
import presentDrinks from './presentDrinks.js'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// select form and inputVal

const formElmnt = $('.search-form')
const inputElmnt = $('[name="drink"]')

// keyup evnt on search form
formElmnt.addEventListener('keyup',function(e){
    e.preventDefault();
    const value = inputElmnt.value

    // if value is not empty - run presentDrinks
    // if value is empty - do nothing
    if(!value) return
    presentDrinks(`${baseUrl}${value}`)
    
})