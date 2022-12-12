import $ from './getElement.js'

const loadingGIF = $('.loading')

export const showLoading = ()=>{
    loadingGIF.classList.remove('hide-loading')
}

export const hideLoading = ()=>{
    loadingGIF.classList.add('hide-loading')
}