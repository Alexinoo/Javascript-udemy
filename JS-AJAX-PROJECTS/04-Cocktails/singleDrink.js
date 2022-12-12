import fetchDrinks from './src/fetchDrinks.js'
import displayDrink from './src/displaySingleDrink.js'

// single cocktail drink
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const presentDrink = async()=> {
    const id = localStorage.getItem('drink')

    // check if id exist - redirect to index.html
    if(!id){
        window.location.replace('index.html')
    }else{

        const drink = await fetchDrinks(`${baseURL}${id}`)
        displayDrink(drink)
    }


}

window.addEventListener('DOMContentLoaded',presentDrink)