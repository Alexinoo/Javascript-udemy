// make a copy
let filteredProductsArr = [...products]

// select product container
const prodContDivElmnt = document.querySelector('.products-container')

const displayProducts = ()=>{
    // if statement

    prodContDivElmnt.innerHTML = filteredProductsArr.map( ({id,title,image,price}) => {
      return `<article class="product" data-id="${id}">
          <img src="${image}" class="product-img img">
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`
    }).join('')
}

displayProducts()

// Text Filter / search functionality
const formElmnt = document.querySelector('.input-form')
const inputElmnt = document.querySelector('.search-input')

formElmnt.addEventListener('keyup',()=>{
    const searchProduct = inputElmnt.value
    // search based on input value 
    //  returns all if includes('') - which what we wanted
    filteredProductsArr = products.filter(({title}) => title.toLowerCase().includes(searchProduct))
    displayProducts()
})