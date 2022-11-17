
// select 3 things ; about / button and articles with a class of content

const tabBtnElmnts = document.querySelectorAll('.tab-btn')
const aboutArticleElmnt = document.querySelector('.about')
const contentDivElmnt = document.querySelectorAll('.content')

// listen for click event on aboutArticleElmnt and get the dataset-tab
aboutArticleElmnt.addEventListener('click',function(e){
    let id = e.target.dataset.id

    // If id exists, then we know we have clicked a tab 

    if(id){

         // loop over tab buttons and remove .active from all
        //Add .active to the clicked tab
        tabBtnElmnts.forEach(function(tab){
            tab.classList.remove('active')
            e.target.classList.add('active')
        })

        // loop over div.content and remove .active from all
        // If the id matches the attribute of div.content.getAttribute('id) of the div.content 
        // add .active class to the div.content
        contentDivElmnt.forEach(function(content){
            content.classList.remove('active')

            // check for matching id and add .active class to it
             if(id === content.getAttribute('id') ){
                 content.classList.add('active') 
             }
        })

    }
})