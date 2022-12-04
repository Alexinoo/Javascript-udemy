
// select toggle button
const toggleBtnElmnt = document.querySelector('.btn')

// toggle dark-mode / white on click event
toggleBtnElmnt.addEventListener('click',()=>{    
    
    // select root element(html)
    // toggle .dark-theme class
    document.documentElement.classList.toggle('dark-theme')
})

// import '.data/js
// add to html <script src="./data.js"></script>

// select section.articles
// loop over each article and output to section.articles
const articleSectionElmnt = document.querySelector('.articles')

const articleElmntArr = articles.map(article => {

    const { title , date , length ,snippet } = article

    // format date
    const formattedDate = moment(date).format("MMM Do YYYY")
    return `
          <article class="post">
           <h2>${title}</h2>
           <div class="post-info">
            <span>${formattedDate}</span>
            <span>${length} min read</span>
           </div>
           <p>${snippet}</p>
        </article>`
}).join('')

articleSectionElmnt.innerHTML = articleElmntArr

// console.log(articles);
// console.log(moment);