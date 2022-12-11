
const url = 'https://course-api.com/javascript-store-single-product'

const prodSecElmnt = document.querySelector('.product')

const fetchProduct = async()=>{

    prodSecElmnt.innerHTML = `<h4 class="product-loading">Loading...</h4>`   
    
    // get id dynamic
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    try { 
        const response = await fetch(`${url}?id=${id}`) 
        if(!response.ok){
            throw new Error('resource not found...')
        }
        const data = await response.json()
        return data

    } catch (error) {
         prodSecElmnt.innerHTML =`<p class="error">There was a problem loading the product. Please try again later!</p>`
    }

}

const displayProduct = (product)=>{
    console.log(product);
    const {company,colors,description,name:title ,price,image} = product.fields
    const { url:img } = image[0]

    // change document title
    document.title = title.toUpperCase()

    // colors Array
    const colorsList = colors.map(color=>{
        return `<span class="product-color" style="background:${color};"></span>`
    }).join('')

    prodSecElmnt.innerHTML = `<div class="product-wrapper">
            <img src="${img}" alt="" class="img">
            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>$${price/100}</span>
                <div class="colors">
                    ${colorsList}
                </div>
                <p>${description}</p>
                <button class="btn">add to cart</button>
            </div>
        </div>`
}


const start = async()=>{
    const product =  await fetchProduct()
    displayProduct(product)
}

start()