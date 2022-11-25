/*

    2 SETUPS
    ......... 

        > Constructor Function setup



        > Class setup - Refactor what we have to class instead of doing from scratch


*/

/////////////////////////  Constructor Function setup ///////////////////////////////////

//constructor function - Takes ( div.first-counter, initialValue )
function Counter(element,value){
    console.log(element,value);
}



// Creating counter instances 
const firstCounter = new Counter(getElement('.first-counter') , 100)
const secondCounter = new Counter(getElement('.second-counter') , 200)

// function to select element and return element if exist else throw error
function getElement(selection){
    const element = document.querySelector(selection)
    if(element){
       return element
    }
    throw new Error(`please check " ${selection}" , no such element exist`)
}

