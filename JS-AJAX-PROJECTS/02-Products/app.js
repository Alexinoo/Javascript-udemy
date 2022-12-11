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
        console.log(data);
        
    } catch (error) {
        prodCenterDiv.innerHTML = `<p class="error">there was an error</p>`
    }    
}

fetchProducts()