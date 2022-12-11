const url = 'https://course-api.com/javascript-store-products'

// Select Elements
const prodCenterDiv = document.querySelector('.products-center')
const loadingDiv = document.querySelector('.loading')
const pElmnt = document.querySelector('.error')


// Fetch Products
const fetchProducts = async()=>{

    prodCenterDiv.innerHTML = `<div class="loading"></div>`

    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('resource not found..')
        }
        const data = await response.json()
        return data
        
    } catch (error) {
        prodCenterDiv.innerHTML = `<p class="error">there was an error</p>`
    }    
}

// {fields:{name,price ,image[0].url , company , colors  }}

const displayProducts = (list)=>{

    const prodList = list.map((product) => {
        // destructuring / alias
        const {id} = product
        const {name:title ,price} = product.fields
        const { url:img } = product.fields.image[0]
        const formatPrice = price/100

        return `<a href="product.html?id=${id}&name=${title}" class="single-product">
            <img src="${img}" alt="couch" class="single-product-img img">
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`
    }).join('')

    prodCenterDiv.innerHTML = `<div class="products-container">${prodList}</div>`
}

const start = async()=>{
    const data = await fetchProducts()
    displayProducts(data)
}

start()