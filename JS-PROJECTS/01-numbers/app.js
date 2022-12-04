
// select all span.number
const spanElmnts = [...document.querySelectorAll('.number')]


// functions - Hoisting Gotchas- needs to be done before invokation
const updateCount = (element)=>{
    console.log(element);
}

spanElmnts.forEach(spanEl => {
    // console.log(spanEl);
    updateCount(spanEl)
})


