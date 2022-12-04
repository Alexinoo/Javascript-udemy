
// select toggle button

const toggleBtnElmnt = document.querySelector('.btn')

toggleBtnElmnt.addEventListener('click',()=>{    
    // console.log(document.documentElement);//html
    document.documentElement.classList.toggle('dark-theme')
})