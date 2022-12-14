import { showLoading } from './toggleLoading.js'

const fetchDrinks = async(url)=>{
    showLoading()
    try {
        const response = await fetch(url)

        if(!response.ok){
            throw new Error('resource not found')
        }
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error);
    }
}

export default fetchDrinks