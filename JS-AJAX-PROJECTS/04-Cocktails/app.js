import presentDrinks from './src/presentDrinks.js'
import './src/searchForm.js'

// search cocktails by some query params
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'

// single cocktail drink
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007




// show cocktails once the doc loads
window.addEventListener('DOMContentLoaded',()=>{
    presentDrinks(url)
})