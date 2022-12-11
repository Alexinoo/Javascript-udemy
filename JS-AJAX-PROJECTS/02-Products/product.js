
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
}


const start = async()=>{
    const product =  await fetchProduct()
    displayProduct(product)
}

start()