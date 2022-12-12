
const setDrink = (section)=> {

    // add event listener on  either img/title

    section.addEventListener('click',function(e){
        // prevent default behavior of the link
        //e.preventDefault();
        
        // get parent elmnt - fetch data-id 
        // event bubbling
        const id = e.target.parentElement.dataset.id

        // save to localStorage
        // JSON.stringify - useful in complicated datatype
        localStorage.setItem('drink',id)
    })
}

export default setDrink