/*

    Slider General Concepts
    .......................... 

        > We have  div.slider-container which has some kind of width & height with position relative

        > Then each and every div.slide has position absolute with width and height of 100% ; that is whe why we can only see the last one (stacked on top of each other)

        > If we would want to see them in one line then uncomment in styles.css

            .slide:nth-child(1){
                left: 0;
            }
            .slide:nth-child(2){
                left: 100%;
            }
            .slide:nth-child(3){
                left: 200%;
            }
            .slide:nth-child(4){
                left: 300%;
            }
            .slide{
                transform: translateX(0%);
            } 

        > And change the last on from -300% to 0%

        > And the reason why we are not able to see that is because overflow is set to hidden in the div.slider-container styles

        > So if we uncomment , then we are able to see

        > This is because:
           -1st slide has a left of 0
           -2nd slide has a left of 100%
           -3rd slide has a left of 200%
           -4th slide has a left of 300%

        > And using Javascript , we will just check what is the index of the actual item and then change whether its 100%,200% and 300% because we don't need to do it manually in the CSS as at the moment

        > So, if we click on the buttons, then we would just shift the slides with  transform:translateX property in the X-direction

            .slide{
                transform: translateX(0%);
            } 
        
        > One gotcha is that the negative will move the slide to the left and positive value will move the slide to the right

        > So :-
             if we change to -100%  we move the first to the left and see the 2nd one
             if we change to -200%  we move then we see the 2nd one and so on...

         .slide{
                transform: translateX(0%);
            } 
         .slide{
                transform: translateX(-100%);
            } 
         .slide{
                transform: translateX(-200%);
            } 

*/

// select Elements

const sliderDivElmnts = document.querySelectorAll('.slide')
const prevBtnElmnt = document.querySelector('.prevBtn')
const nextBtnElmnt = document.querySelector('.nextBtn')

// iterate through the slides and add the left-property to each slide based on their index on where the element is sitting

sliderDivElmnts.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`
})

// Add the functionality that control which slide is shown and which ones are hidden

let counter = 0

nextBtnElmnt.addEventListener('click',function(){
    counter++
    carousel()
})

prevBtnElmnt.addEventListener('click',function(){
    counter--
    carousel()
})

// Set a function that controls the transform property when the counter variable is incremented
/*
function carousel(){

    // working with slides.length
    if(counter === sliderDivElmnts.length){
        counter = 0
    }    
    if( counter < 0 ){
        counter = sliderDivElmnts.length - 1
    }
    sliderDivElmnts.forEach(function(slide){
    slide.style.transform = `translateX(-${counter*100}%)`
})
}
*/

/* 
    Working with Buttons
    ......................

      Previous Button
      -----------------

        > Hide Prev Button when the application loads

        > Only show when the counter is greater than 1


      Next Button
      -----------------

        > Hide Next Button when you get to the last slide

        > Show when the application loads

*/

 prevBtnElmnt.style.display = 'none'

 function carousel(){

    // next button
    if( counter < sliderDivElmnts.length - 1 ){
        nextBtnElmnt.style.display = 'block'
    }else {
        nextBtnElmnt.style.display = 'none'
    } 
    
    // show prev button when you get to the last slide

    if( counter > 0 ) {
        prevBtnElmnt.style.display = 'block'
    }else{
        prevBtnElmnt.style.display = 'none'
    }


    sliderDivElmnts.forEach(function(slide){
    slide.style.transform = `translateX(-${counter*100}%)`
})
}