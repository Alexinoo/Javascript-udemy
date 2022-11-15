/*
    Navbar General Concepts 
    ....................... 

    Understand how the toggle functionality works
    --------------------------------------------------

        > We focus on 2 things
        
            - start by getting the height of our links (ul.links) (10rem)
            - listen for click event ( button.nav-toggle ) 
            - Toggle .show-links class


        > BY Default

            - Hide the links by uncommenting (by default)
                .links {
                     height: 0;
                     overflow: hidden;
                     transition: var(--transition);
                    }
        > Toggle

            - Add .show-links to ul.links if it ( DOES NOT EXIST )
                   .show-links {
                        height: 10rem;
                    }
            - Remove ul.links.show-links if it ( EXIST )

            - toggle() - checks if the class is there ..adds it else removes it
                    e.g ulLinksElmnt.classList.toggle('show-links')

    GOTCHAS
    ..................

        > set the height to auto for bigger screens in the media query

            .links {
                height: auto;
                display: flex;
            }
*/

// select button.nav-toggle and ul.links

const navToggleBtn = document.querySelector('.nav-toggle')
const ulLinksElmnt = document.querySelector('.links')


// Events Listeners
navToggleBtn.addEventListener('click',function(){

    if(ulLinksElmnt.classList.contains('show-links')){
        ulLinksElmnt.classList.remove('show-links')
    }else{
         ulLinksElmnt.classList.add('show-links')
    }

    // toggle() -One liner
    // ulLinksElmnt.classList.toggle('show-links')
})