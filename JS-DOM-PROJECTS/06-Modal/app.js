
/* 

Modal Challenge
................

    > div.modal-overlay is hidden by default by the following properties
          visibility: hidden;
          z-index: -10;

    > add .open-modal class to div.modal-overlay class
         .open-modal {
            visibility: hidden;
            z-index: -10;
         }
            

    > remove .open-modal class to close modal

STEPS TO REPRODUCE
...................

  > select modal-btn,modal-overlay,close-btn
  > listen for click events on modal-btn and close-btn
  > when user clicks modal-btn add .open-modal to modal-overlay
  > when user clicks close-btn remove .open-modal from modal-overlay

 */

//   SELECT ELEMENTS

  const modalBtnElmnt = document.querySelector('.modal-btn')
  const closeBtnElmnt = document.querySelector('.close-btn')
  const modalOverlayElmnt = document.querySelector('.modal-overlay')

//   Event Listeners
  modalBtnElmnt.addEventListener('click',openModal)
  closeBtnElmnt.addEventListener('click',closeModal)

//  Functions

function openModal(){
    modalOverlayElmnt.classList.add('open-modal')
}

function closeModal(){
    modalOverlayElmnt.classList.remove('open-modal')
}