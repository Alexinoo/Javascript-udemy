
const setDrink = (section)=>{
    
    // add event listener on either image/title
    // event bubble to parentElement
    section.addEventListener('click',function(e){
       
        // e.preventDefault();
        
        // get data-id property
        const id = e.target.parentElement.dataset.id

        // save to local storage
        //JSON.stringify / JSON.parse - useful in more complicated datatypes

        localStorage.setItem('drink',id)
    })
}

export default setDrink