// import { url , page_url } from './wiki-urls.js'

const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

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
   resultsDivElmnt.innerHTML = `<div class="loading"></div>` 
   try {

    const response = await fetch(`${url}${searchValue}`)
    const data = await response.json() 
    const results = data.query.search //dig into the data

    // check for empty array
    if(results.length === 0){
        resultsDivElmnt.innerHTML = `<div class="error">no matching results. Please try again.</div>`
        return
    }
    renderResults(results)
    
   }
    catch (error) {
     resultsDivElmnt.innerHTML = `<div class="error">there was an error...</div>` 
   }
}



const renderResults = (list)=>{
    console.log(list);
}


