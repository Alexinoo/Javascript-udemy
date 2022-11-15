/*

Side bar setup - aside.sidebar
.............................

    > position fixed
    > top and left 0
    > takes 100% for full width and height

    > Then when we get to a bigger screen it takes a width of 400px
        e.g.

        @media screen and (min-width: 676px) {
            .sidebar {
                width: 400px;
            }
        }

But how are we going to hide the side bar
......................................

    > By default we would want to hide the sidebar - by using the transform property and set it to a value of translate(-100%) - uncomment out
        e.g.  transform: translate(-100%);

    > This pushes the sidebar left 100% of its own width i.e. Disappears from the page

    > If we want to show the sidebar, then we need to set it to a value of translate(0) which takes it back to it's default position
        e.g.  transform: translate(0);

    > Use sidebar button to toggle the .show-sidebar class
        e.g.
         .show-sidebar {
            transform: translate(0);
        }


*/

// select elements
    const toggleBtnElmnt = document.querySelector('.sidebar-toggle')
    const closeBtnElmnt = document.querySelector('.close-btn')
    const sideBarElmnt = document.querySelector('.sidebar')


// Event Listeners

    // Toggle sidebar (add/remove aside.sidebar.show-sidebar)
    toggleBtnElmnt.addEventListener('click',function(){
        sideBarElmnt.classList.toggle('show-sidebar')
    })

    // Close sidebar (remove.show-sidebar) from aside.sidebar.show-sidebar
    closeBtnElmnt.addEventListener('click',function(){
        sideBarElmnt.classList.remove('show-sidebar')
    })