// get Element
const getElement = (selector)=>{
    const element = document.querySelector(selector)
    if(element) return element
    throw new Error(`${selector} element does not exist`)
}

export default getElement