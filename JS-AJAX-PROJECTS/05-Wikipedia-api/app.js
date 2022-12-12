import { url , page_url } from './wiki-urls.js'

// Select Elements
const formElmnt = document.querySelector('.form')
const formInputElmnt = document.querySelector('[name="search"]')
const resultsDivElmnt = document.querySelector('.results')

// submit event
formElmnt.addEventListener('submit',(e)=>{
    e.preventDefault()
    const value = formInputElmnt.value
    
    if(!value){
      resultsDivElmnt.innerHTML = `<div class="error">please enter valid search term</div>` 
      return 
    }
    fetchPages(value)
})

const fetchPages = async(searchValue)=>{
    console.log(searchValue);
}


