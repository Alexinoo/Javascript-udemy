const url = 'https://course-api.com/javascript-store-products'

// Select Elements
const prodCenterDiv = document.querySelector('.products-center')
const loadingDiv = document.querySelector('.loading')
const pElmnt = document.querySelector('.error')


// Fetch Products
const fetchProducts = async()=>{
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('resource not found..')
        }
        const data = await response.json()
        
    } catch (error) {
        console.log(error || error.message );
    }    
}

fetchProducts()