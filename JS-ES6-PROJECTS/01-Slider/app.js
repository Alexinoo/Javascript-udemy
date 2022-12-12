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