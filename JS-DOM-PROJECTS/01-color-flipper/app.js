/* 
Change background color once the button is clicked 
...................................................

    > listen for click event
    > change background color using a random color form the colors array

*/

// colors Array
const colors = ["green","red","rgba(133,122,200)","#f15025"]


// select Elements
const btnElement = document.getElementById('btn')
const colorSpanElement = document.querySelector('.color')



// Event Listeners
btnElement.addEventListener('click',changeBackgroundColor)





/*
     Functions
     ................. 

    changeBackgroundColor() 
        > Executes after the click event

    getRandomNumber()
        > use Math.random() - gives values between 0 - 0.99999
        > multiply with array.length -  gives values between 0 - 3.9999
        > use Math.floor() to round down the random value (0 , 1 , 2,3)

*/
function changeBackgroundColor(){ 
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    colorSpanElement.textContent = colors[randomNumber]
}



function getRandomNumber(){  
    return Math.floor(Math.random() * colors.length)
}

