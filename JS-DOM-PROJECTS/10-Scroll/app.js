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
/*
    > Once we scroll past the height of the navbar 
    > then we want to set up a class on the navbar (fixed class)
     
        .fixed-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--clr-white);
        box-shadow: var(--light-shadow);
         }

    > So that if we keep on scrolling ,navbar stays fixed at the top 

    

    Back To Top button
    ...................
        > Hidden by default

        > Will only show up once we scroll up past certain point (arbitrary value of your choice)

        > Add .show-link  class to .top-link

            .show-link {
                visibility: visible;
                z-index: 100;
            }

*/

// select navbar and topLink button

const navbarElmnt = document.getElementById('nav')
const topLink = document.querySelector('.top-link')


window.addEventListener('scroll',function(){
    const scrollHeight = window.scrollY
    const navbarElmntHeight = navbarElmnt.getBoundingClientRect().height
    
    // If we scroll past the height of the nav ..add fixed else remove it
    if(scrollHeight > navbarElmntHeight){
        navbarElmnt.classList.add('fixed-nav')
    }else{
         navbarElmnt.classList.remove('fixed-nav')
    }

    // If we scroll past an arbitrary value (say 500 ) , show top-link button

    if( scrollHeight > 500 ){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }


})





/*********** smooth scroll ************

    > Add scroll-behavior property to enable smooth scrolling on different sections

        html {
            scroll-behavior: smooth;
            }
    > Current setup misses on certain sections when navigating to specific sections with the nav-links

    > So how do we  navigate precisely to the desired sections...
    
    
    Well we can use Javascript for that
    .....................................

        > Listen for click events on the scroll links and prevent default behavior of links

        > use e.currentTarget property and getAttribute to get href attribute

        > use slice to remove the # 

        > use offsetTop to get position from the top - gives us an idea where the actual element is sitting

        > In order to scroll to that position use window.scrollTo and get the exact coordinates

*/

// select links .scroll-links
// Loop through each and listen for click event

const scrollLinks  = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        
        // prevent default
        e.preventDefault()

        // navigate to specific spot

        const id = e.currentTarget.getAttribute('href').slice(1)

        // get the element with the specified id
        const element = document.getElementById(id)

        // get the position of that element using offsetTop (gives us the value from the top to that element )
        let elementPosition = element.offsetTop

        // scrollTo the exact co-ordinates
        window.scrollTo({
            left : 0,
            top : elementPosition,
        })

        // close the links on small screen
        linksContDiv.style.height = 0

    })
})
