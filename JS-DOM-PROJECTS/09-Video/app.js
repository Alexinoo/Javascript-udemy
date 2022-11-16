// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// select switch buttons and video container

const switchBtnElmnt = document.querySelector('.switch-btn')
const videoContElmnt = document.querySelector('.video-container')

// Event Listeners
//Toggle slide for play/pause

switchBtnElmnt.addEventListener('click',function(){
    if(!switchBtnElmnt.classList.contains('slide')){
        switchBtnElmnt.classList.add('slide')
        // pause video
        videoContElmnt.pause()
    }else{
        switchBtnElmnt.classList.remove('slide')
        // play video
        videoContElmnt.play()
    }
})

// Once everything loads, hide the preloader

// select preloader

const preloaderDivElmnt = document.querySelector('.preloader')

// load event
window.addEventListener('load',function(){
    preloaderDivElmnt.classList.add('hide-preloader')
})