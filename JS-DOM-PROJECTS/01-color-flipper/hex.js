/*

Change background color once the button is clicked (Hex color)
...................................................

    > listen for click event
    > change background color using a random hex color(#6values)

hex color
.............

    > consists of #(six values)
    > values can be between 0 - 9 and letters A-F (A-10 , B-11,C-12 ,D-13 ,E-14 ,F-15)
    > typical example of hexColor would look like this: #f15025
*/

// colors Array
const hexColorsArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

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
        > for loop that runs 6 times and generates 6 random values and concatenates with '#'
            e.g #f15025

        > Every time the loop runs it generates a random number which is concatenated with #

        > Therefore after running 6 times , it will generate 6 random numbers

    getRandomNumber()

        > returns any number within the hexColorsArray array
        e.g. hexColor[1],hexColor[5],hexColor[3],hexColor[10]

*/

function changeBackgroundColor(){ 

    let hexColor = '#'

    for(let i =0;i< 6;i++){

        let randomnumber = getRandomNumber()

        hexColor += hexColorsArray[randomnumber]
    }
    colorSpanElement.textContent = hexColor
    document.body.style.background = hexColor
}

function getRandomNumber(){
    return Math.floor(Math.random() * hexColorsArray.length)
}

