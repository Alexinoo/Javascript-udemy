
const url = 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'

const prodSecElmnt = document.querySelector('.product')

const fetchProduct = async()=>{
    try {        
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error);
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