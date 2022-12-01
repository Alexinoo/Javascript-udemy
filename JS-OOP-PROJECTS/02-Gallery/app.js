function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}


// Constructor function
function Gallery(element){

  // target section.nature OR section.city sections
  this.container = element

  // element.querySelectorAll('.img') returns a NodeList
  // [...] use spread operator to convert it into an array
  this.list = [...element.querySelectorAll('.img')];

  // Select Elements
  // div.modal,button.close-btn , button.prev-btn, button.next-btn, div.modal-images 
  this.modal = getElement('.modal')
  this.modalImg = getElement('.main-img')
  this.imageName = getElement('.image-name')
  this.modalImages = getElement('.modal-images')

  this.closeBtn = getElement('.close-btn')
  this.prevBtn = getElement('.prev-btn')
  this.nextBtn = getElement('.next-btn')

  // set self variable that points to the Gallery (self reference)
  let self = this

  // point to the Gallery instead of the container
  // this.openModal = this.openModal.bind(this)
  // used self variable instead

  // bind functions - to the Gallery instead of the button(close/next/prev)
  this.closeModal = this.closeModal.bind(self)
  this.nextImage = this.nextImage.bind(self)
  this.prevImage = this.prevImage.bind(self)

  this.container.addEventListener('click',function(e){
    
    //check if the target contains img class
    if(e.target.classList.contains('img')){

    //pass section.nature/section.city selected and the list of images under that section
    self.openModal(e.target ,self.list)
    }
  })
  
}

// Methods on Prototype
// Gallery.openModal()
Gallery.prototype.openModal = function(selectedImg,list){
  this.setMainImage(selectedImg)
  this.modalImages.innerHTML = list.map(function(image){
    const { src,title,alt} = image
    return `<img src="${src}" title="${title}" alt="${alt}" class="${selectedImg.dataset.id ===image.dataset.id ? "modal-img selected" : "modal-img"}" data-id="${image.dataset.id}">`
  }).join('')
  this.modal.classList.add('open')

  // close modal on click evnt
  this.closeBtn.addEventListener('click',this.closeModal)
  this.nextBtn.addEventListener('click',this.nextImage)
  this.prevBtn.addEventListener('click',this.prevImage)
}

// Gallery.setMainImage()
Gallery.prototype.setMainImage = function(selectedImg){
   this.modalImg.src = selectedImg.src
   this.imageName.textContent = selectedImg.title
}

// Gallery.closeModal()
Gallery.prototype.closeModal = function(){
  this.modal.classList.remove('open')
  // remove evnt listeners after closing the modal
  this.closeBtn.removeEventListener('click',this.closeModal)
  this.nextBtn.removeEventListener('click',this.nextImage)
  this.prevBtn.removeEventListener('click',this.prevImage)
}

// Gallery.nextImage()
Gallery.prototype.nextImage = function(){
  
}

// Gallery.prevImage()
Gallery.prototype.prevImage = function(){

}



// Instantiating / Create Objects / Instances
const natureInst = new Gallery(getElement('.nature'))

const cityInst = new Gallery(getElement('.city'))