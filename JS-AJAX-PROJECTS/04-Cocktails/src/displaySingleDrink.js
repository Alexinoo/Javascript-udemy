import { hideLoading } from "./toggleLoading.js"
import $ from './getElement.js'

const displayDrink = (data)=>{
    hideLoading()
    // destructure
    const drink = data.drinks[0]

    const { strDrink:name ,strDrinkThumb:image ,strInstructions
:desc } = drink

    //  ingredients as Arr
   const ingredientsArr = [ 
        drink.strIngredient1 ,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        ]
    const imgElmnt = $('.drink-img')
    const h2Elmnt = $('.drink-name')
    const pElmnt = $('.drink-desc')
    const ulElmnt = $('.drink-ingredients')

    // set dynamic
    // title
    document.title = name 
    imgElmnt.src = image
    h2Elmnt.textContent = name
    pElmnt.textContent = desc
    ulElmnt.innerHTML = ingredientsArr.map(ingredient => {
        if(!ingredient)return //filter null values
        return `<li><i class="far fa-check-square"></i>${ingredient}</li>`
    }).join('')
}

export default displayDrink