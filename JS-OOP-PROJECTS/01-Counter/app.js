/*
    2 SETUPS
    ......... 
        > Constructor Function setup
        > Class setup - Refactor what we have to class instead of doing from scratch
*/

/////////////////////////  Constructor Function setup ///////////////////////////////////

// getElement() - select element and return element if exist else throw error
function getElement(selection){
    const element = document.querySelector(selection)
    if(element){
       return element
    }
    throw new Error(`please check " ${selection}" , no such element exist`)
}


//constructor function - Takes ( div.first-counter, initialValue )
function Counter(element,value){
    
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
     */
    
    const increase = this.increase.bind(this)
    const reset = this.reset.bind(this)
    const decrease = this.decrease.bind(this)
    
    //// Event listeners /////
    this.increaseBtn.addEventListener('click',increase)
    this.resetBtn.addEventListener('click',reset)
    this.decreaseBtn.addEventListener('click',decrease)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////   FUNCTIONS        ///////////////////////////////////////////////////

// Set  increase() , reset() and decrease() methods on the Counter __proto__ (Prototype)instead of attaching to the constructor which just creates copies


//increase()
Counter.prototype.increase = function(){
    this.value++
    this.valueDOM.textContent = this.value
}

//decrease()
Counter.prototype.decrease = function(){
   this.value--
   this.valueDOM.textContent = this.value
}

//reset()
Counter.prototype.reset = function(){
    this.value = 0
    this.valueDOM.textContent = this.value
}


///////////////////////////////////////////////////////////////////////////////////////////////////// Creating counter instances ////////////////////////////////////////////////

const firstCounter = new Counter(getElement('.first-counter') , 100)
const secondCounter = new Counter(getElement('.second-counter') , 200)


