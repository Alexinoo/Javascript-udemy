/*
    TASK
    ......

        > Click Decrease button to decrement the counter value ( apply red color for values < 0 )

        > Click reset button to reset counter value to 0 ( apply black color for values equal to 0 )

        > Click Increase button to increment the counter value ( apply green color for values > 0 )

*/



// set initial value
let count = 0


// select elements
const btnElementList = document.querySelectorAll('.btn')
const spanElement = document.querySelector('#value')


// Loop through the NodeList and listen for click event
btnElementList.forEach(button =>{
    button.addEventListener('click',changeCounter)
})



/* function -

  check for evt object and check for classes
  ............................................

    > if decrease - decrement the count
    > if increase - increment the count
    > if reset - reset the count to 0
*/

function changeCounter(e){
    const cssClass = e.currentTarget.classList
    // check for ( decrease /reset / increase ) classes from the target element
    if(cssClass.contains('decrease')){
         count--           
     }
    else if(cssClass.contains('increase')){
         count++
    }
    else{
         count = 0
     }

    //Apply stylings based on the count value
    if(count > 0){
        spanElement.style.color = 'green' 
    }
    else if(count < 0){
        spanElement.style.color = 'red' 
    }
    else{
        spanElement.style.color = '#222' 
    }
    spanElement.textContent = count

}

