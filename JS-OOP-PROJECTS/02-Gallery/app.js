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
  this.modalImages = getElement('.modal-images')

  this.closeBtn = getElement('.close-btn')
  this.prevBtn = getElement('.prev-btn')
  this.nextBtn = getElement('.next-btn')

  // set self variable that points to the Gallery (self reference)
  let self = this


  // bind functions
  // point to the Gallery instead of the container
  // this.openModal = this.openModal.bind(this)
  // used self instead
  this.container.addEventListener('click',function(e){
    
    self.openModal()
  })
  
}

// Methods on Prototype
Gallery.prototype.openModal = function(){
  this.modal.classList.add('open')
}



// Instantiating / Create Objects / Instances
const natureInst = new Gallery(getElement('.nature'))

const cityInst = new Gallery(getElement('.city'))