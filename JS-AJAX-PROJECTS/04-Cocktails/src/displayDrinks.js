
import $ from './getElement.js'

const displayDrinks = ({drinks})=>{
    // select div.section-center - display drinks if request successful
    // select h2.title - display error if if request was successful

    const sectionCentDivElmnt = $('.section-center')
    const h2TitleElmnt = $('.title')

    // check value of drinks
    if(!drinks){
        // hide loading

        h2TitleElmnt.textContent = 'sorry, no drinks matched your search'
        sectionCentDivElmnt.innerHTML = null
        return
    }

    const newDrinks = drinks.map(drink => {
        
        const {idDrink:id , strDrink:name , strDrinkThumb:image} = drink
        return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
          </article>
        </a>`
    }).join('')

    // hide loading

    h2TitleElmnt.textContent = ''
    sectionCentDivElmnt.innerHTML = newDrinks

    return sectionCentDivElmnt

}

export default displayDrinks