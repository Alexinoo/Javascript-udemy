// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels


// ********** set date ************

const dateSpanElmnt = document.getElementById('date')
dateSpanElmnt.textContent = new Date().getFullYear()



 

// ********** toggle / close links ************
// select btn.nav-toggle, div.links-container , and ul.links
// Add Event listener on navToggleBtn
// Height of the links-container is 0 and hidden by default in the CSS ;
// Toggle .show-links class and add it to .links-container class

const navToggleBtn = document.querySelector('.nav-toggle')
const linksContDiv = document.querySelector('.links-container')
const ulLinks = document.querySelector('.links')

navToggleBtn.addEventListener('click',function(){
   
// linksContDiv.classList.toggle('show-links')

/* DOWNSIDES OF THIS APPROACH (Not ideal for dynamic links)
    > We are adding/hardcoding the height of the .links-container 
    > In case, we want to add more links , then they will not be visible and again , if we remove some links , there is a space that is left.
*/

//*****SOLUTION - Calculate the height of the links dynamically *///

  const linksContDivHeight = linksContDiv.getBoundingClientRect().height
  const ulLinksHeight = ulLinks.getBoundingClientRect().height

  if(linksContDivHeight === 0){
    linksContDiv.style.height = `${ulLinksHeight}px`
  }else{
    linksContDiv.style.height = 0
  }

/**********  GOTCHAS ---MUST !!!!!!  ***************
  > set the height of the links container to auto once you get to bigger screen

    .links-container {
        height: auto !important;
     }

***/

})

 





// ********** fixed navbar ************





// ********** smooth scroll ************
// select links
