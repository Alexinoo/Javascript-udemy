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
  
  // bind chosen image to Gallery and not the button
  this.choseImage = this.choseImage.bind(self)

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

  // listen for close modal event
  this.closeBtn.addEventListener('click',this.closeModal)
  // listen for prev/next click events
  this.nextBtn.addEventListener('click',this.nextImage)
  this.prevBtn.addEventListener('click',this.prevImage)

  // listen for click event on chose modal image
  this.modalImages.addEventListener('click',this.choseImage)
}

// Gallery.setMainImage()
Gallery.prototype.setMainImage = function(selectedImg){
   this.modalImg.src = selectedImg.src
   this.imageName.textContent = selectedImg.title
}

// Gallery.closeModal()
Gallery.prototype.closeModal = function(){
  this.modal.classList.remove('open')
  // remove all evnt listeners after closing the modal
  this.closeBtn.removeEventListener('click',this.closeModal)
  this.nextBtn.removeEventListener('click',this.nextImage)
  this.prevBtn.removeEventListener('click',this.prevImage)
  this.modalImages.removeEventListener('click',this.choseImage)
}

// Gallery.nextImage() - traverse the DOM (div.modal-images)
Gallery.prototype.nextImage = function(){
  
  // get the selected image from div.modal-images
  const selectedImage = this.modalImages.querySelector('.selected')

  // get the next image or if Its at the end of the array get the first one
  const nextImage = selectedImage.nextElementSibling || this.modalImages.firstElementChild

  // remove the class of selected to the current
  selectedImage.classList.remove('selected')

   // add .selected class to the next one
  nextImage.classList.add('selected')

  // update the mainImage (based on the next selected)
  this.setMainImage(nextImage)


}

// Gallery.prevImage() - traverse the DOM (div.modal-images)
Gallery.prototype.prevImage = function(){

  // get the selected image from div.modal-images
  const selectedImage = this.modalImages.querySelector('.selected')

  // get the next image or if Its at the end of the array get the first one
  const previousImage = selectedImage.previousElementSibling || this.modalImages.lastElementChild

  // remove the class of selected to the current
  selectedImage.classList.remove('selected')

   // add .selected class to the next one
  previousImage.classList.add('selected')

  // update the mainImage (based on the next selected)
  this.setMainImage(previousImage)
}

// Diplay chosen image functionality
Gallery.prototype.choseImage = function(e){

  // check if what is clicked has .modal-img class
  if(e.target.classList.contains('modal-img')){

    // remove .selected class from all the other modalImages
    const selected = this.modalImages.querySelector('.selected')
    selected.classList.remove('selected')

    this.setMainImage(e.target)
    // add .selected class to the chosen image
    e.target.classList.add('selected')
  }
}



// Instantiating / Create Objects / Instances
const natureInst = new Gallery(getElement('.nature'))

const cityInst = new Gallery(getElement('.city'))