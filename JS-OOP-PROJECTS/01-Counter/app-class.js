/*
    2 SETUPS
    ......... 
        > Constructor Function setup
        > Class setup - Refactor what we have to class instead of doing from scratch
*/

/////////////////////////  Class setup ///////////////////////////////////

// getElement() - select element and return element if exist else throw error
function getElement(selection){
    const element = document.querySelector(selection)
    if(element){
       return element
    }
    throw new Error(`please check " ${selection}" , no such element exist`)
}


//constructor function - Takes ( div.first-counter, initialValue )

class Counter {

    // constructor
    constructor(element,value){    
        // setup instance variables
        this.counter = element
        this.value = value

        // select buttons
        this.decreaseBtn = element.querySelector('.decrease')
        this.resetBtn = element.querySelector('.reset')
        this.increaseBtn = element.querySelector('.increase')

        // select value from the DOM and update
        this.valueDOM = element.querySelector('.value')
        this.valueDOM.textContent = this.value

        /** 
         * this.increase - points to the button ( left of the addEventListener() )
         
        this.increaseBtn.addEventListener('click',this.increase)
        this.resetBtn.addEventListener('click',this.reset)
        this.decreaseBtn.addEventListener('click',this.decrease)
        
        
        
        *********** use bind(this) - 
        
        - change to point to the Counter ***********************
        
        const increase = this.increase.bind(this)
        const reset = this.reset.bind(this)
        const decrease = this.decrease.bind(this)
        
        - Wait and execute after event
        this.increaseBtn.addEventListener('click',increase)
        this.resetBtn.addEventListener('click',reset)
        this.decreaseBtn.addEventListener('click',decrease)     
        
        assign to a variable in case we want to remove event listeners
        this.increaseBtn.addEventListener('click',this.increase.bind(this)) 
        
        WONT WORK!!! with removeEventListeners()

        */

        
        this.increase = this.increase.bind(this)
        this.reset = this.reset.bind(this)
        this.decrease = this.decrease.bind(this)
        
        //// Event listeners /////
        this.increaseBtn.addEventListener('click',this.increase)
        this.resetBtn.addEventListener('click',this.reset)
        this.decreaseBtn.addEventListener('click',this.decrease)
    }

    // methods

    increase(){
        this.value++
        this.valueDOM.textContent = this.value
    }

    decrease(){
        this.value--
        this.valueDOM.textContent = this.value
    }

    reset(){
        this.value = 0
        this.valueDOM.textContent = this.value
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////// Creating counter instances/objects  //////////////////////////////////////

const firstCounter = new Counter(getElement('.first-counter') , 100)
const secondCounter = new Counter(getElement('.second-counter') , 200)
const thirdCounter = new Counter(getElement('.third-counter') , 300)


