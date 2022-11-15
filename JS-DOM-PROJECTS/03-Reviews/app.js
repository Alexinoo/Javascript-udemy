// local reviews data
const reviewsArray = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// select elements and btns
const imgElement = document.getElementById('person-img')
const authorElement = document.getElementById('author')
const jobElement = document.getElementById('job')
const infoElement = document.getElementById('info')
// buttons
const prevBtnElement = document.querySelector('.prev-btn')
const nextBtnElement = document.querySelector('.next-btn')
const randomBtnElement = document.querySelector('.random-btn')


// set starting item
let currentIndex = 0


// Event Listeners

  // DOMContentLoaded
  // once the document loads - then access the first item (0) index-0 from reviewsArray and display

      window.addEventListener('DOMContentLoaded',function(){
        showPerson(currentIndex)
      })


  // next Button (show next person) - increment the currentIndex value
  // Gotchas - if currentIndex exceeds the lastIndex set it to 0 (since that index does not exist)
      nextBtnElement.addEventListener('click',function(){
        currentIndex++
        if(currentIndex > reviewsArray.length - 1){
          currentIndex = 0
        }
        showPerson(currentIndex)
      })

  // previous Button (show previous person) - decrement the currentIndex value
  // Gotchas - if currentIndex is less than 0 , set it to the last index
      prevBtnElement.addEventListener('click',function(){
        currentIndex--
        if(currentIndex < 0 ){
          currentIndex = reviewsArray.length - 1
        }
        showPerson(currentIndex)
      })

  // random button (show random person)
  // genenerate random value from the reviewsArray and set it to the currentIndex
      randomBtnElement.addEventListener('click',function(){
        currentIndex = randomPerson()
        showPerson(currentIndex)
      })



// FUNCTIONS

    // create a function - for reusability
    function showPerson(index){
      const firstItem = reviewsArray[index]
      imgElement.src = firstItem.img
      authorElement.textContent = firstItem.name
      jobElement.textContent = firstItem.job
      infoElement.textContent = firstItem.text
    }

    // generate random number between reviewsArray
    function randomPerson(){
      return Math.floor(Math.random() * reviewsArray.length)
    }

