/*
    Questions General Concept
    ..........................

        >  Hide question text by default when the page loads

            .question-text {
                  display: none;
                }

        > show text only when we click the Plus (+) icon by adding  .show-text class

            .show-text .question-text {
                       display: block;
                }

        > Hide Minus (-) icon by default

            .minus-icon {
                      display: none;
                }

        > Show Minus (-) icon only when the question text
                .show-text .minus-icon {
                      display: inline;
                    }

        > Hide Plus ( + ) icon when the question is opened

            .show-text .plus-icon {
                    display: none;
                 } 

    STEPS TO REPRODUCE
    ..........................

    > Option 1 : Traversing the dom
    > Option 2 : Using selectors inside the element

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
/// OPTION 1 - Traversing the DOM ///////////////////
........................................................

 

// select Elements 
// select the 3 question-buttons as NodeList

const questionBtnsElmnt = document.querySelectorAll('.question-btn')



// Event Listeners 
// loop through them and add  event listener to respond to
questionBtnsElmnt.forEach(function(button){
    button.addEventListener('click',showText)
})


// Functions
function showText(e){
  let questionTextDivElmnt =  e.currentTarget.parentElement.parentElement
  questionTextDivElmnt.classList.toggle('show-text')
}

*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/// OPTION 2 - Using Selectors Inside the Elements ///////////////////


// select article.question as NodeList

const articleElmnts = document.querySelectorAll('.question')


// lopp through the NodeList and listen for click event

articleElmnts.forEach(function(article){
    // console.log(article);
    const questionBtnsElmnt = article.querySelector('.question-btn')
    // console.log(questionBtnsElmnt);
    questionBtnsElmnt.addEventListener('click',function(){

        //loop through articleElmnts and check if there is any article with .show-text class
        //remove it
       articleElmnts.forEach(function(item){
        if (item !== article){
            item.classList.remove('show-text')
        }
       })

     // Toggle the clicked one
        article.classList.toggle('show-text')
    })
})

