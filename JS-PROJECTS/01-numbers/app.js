
// select all span.number
const spanElmnts = [...document.querySelectorAll('.number')]


// functions - Hoisting Gotchas- needs to be done before invokation
const updateCount = (element)=>{
    const elValue = Number(element.dataset.value)
    const increment = Math.ceil(elValue / 1000)
    let initialValue = 0
}

spanElmnts.forEach(spanEl => {
    // console.log(spanEl);
    updateCount(spanEl)
})


