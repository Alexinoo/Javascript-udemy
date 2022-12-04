
// select all span.number
const spanElmnts = [...document.querySelectorAll('.number')]


// functions - Hoisting Gotchas- needs to be done before invokation
const updateCount = (element)=>{
    const setMaxValue = Number(element.dataset.value)
    const increment = Math.ceil(setMaxValue / 1000)
    // We can also set increment to 1 or just some random value depends with preferences
    // const increment = 1
    let initialValue = 0
 
    const intervalID = setInterval(()=>{
        initialValue += increment

        if(initialValue > setMaxValue){
            element.textContent = `${setMaxValue}+`
            clearInterval(intervalID)
            return
        }

        element.textContent = `${initialValue}+`
    },1)
}




spanElmnts.forEach(spanEl => {    
    updateCount(spanEl)
})


