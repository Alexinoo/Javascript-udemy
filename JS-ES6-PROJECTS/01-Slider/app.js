import peopleArr from './data.js'

// select Elements
const sliderContDivElmnt = document.querySelector('.slide-container')
const nextBtnElmnt = document.querySelector('.next-btn')
const prevBtnElmnt = document.querySelector('.prev-btn')

// iterate peopleArr and set it to sliderContDivElmnt.innerHTML
sliderContDivElmnt.innerHTML = peopleArr.map((person,slideIndex) => {
    const {img,name,job,text} = person

    // more logic
    let position = 'next'

    // set the first slide as active
    if(slideIndex === 0){
        position = 'active'
    }
    // set the last slide as active
    if(slideIndex === peopleArr.length - 1 ){
        position = 'last'
    }

    return `<article class="slide ${position}">
          <img src="${img}" alt="${name}" class="img">
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}</p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`
}).join('')



// controls the next/slide functionality
const startSlider = (type)=> {
    // add .next class to the .active
    // add .active class to .last
    const activeSlideElmnt = document.querySelector('.active')
    const lastSlideElmnt = document.querySelector('.last')

    let nextSlideElmnt = activeSlideElmnt.nextElementSibling

    // End Of An Array
    // If there is no next slide - start from the 1st 
    if(!nextSlideElmnt){
        nextSlideElmnt = sliderContDivElmnt.firstElementChild
    }
    
    // remove .active class from the activeSlideElmnt - since we have multiple classes use ['active'] to be more specific
    // remove .next class from the nextSlideElmnt
    // remove .last class from the lastSlideElmnt
    activeSlideElmnt.classList.remove(['active'])
    nextSlideElmnt.classList.remove(['next'])
    lastSlideElmnt.classList.remove(['last'])

    // Add classes
    activeSlideElmnt.classList.add('last')
    nextSlideElmnt.classList.add('active')
    lastSlideElmnt.classList.add('next')


}


// Evnt Listeners
nextBtnElmnt.addEventListener('click',()=>{
    startSlider('next')
})
prevBtnElmnt.addEventListener('click',()=>{
    startSlider('prev')
})