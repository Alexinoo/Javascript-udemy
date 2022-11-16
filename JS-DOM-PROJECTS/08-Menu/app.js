const menuItemsArray = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// select div.section-center
const sectionCenterDivElmnt = document.querySelector('.section-center')

// select filter buttons
const filterBtnElmnts = document.querySelectorAll('.filter-btn')

//
const btnContainerElmnt = document.querySelector('.btn-container')


// Display Items when page loads
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menuItemsArray)

  // Get unique categories usine arr.reduce()

  const categories = menuItemsArray.reduce(function (acc, menu) {
    if (!acc.includes(menu.category)) {
      acc.push(menu.category)
    }
    return acc
  }, ['all'])

  // Get unique categories (ES6 style) uniqueCategories = new Set(categories);

  // console.log(uniqueCategories);
})


// Add event listener to filter buttons

filterBtnElmnts.forEach(function (button) {
  button.addEventListener('click', function (e) {

    const menuCategory = e.currentTarget.dataset.category

    let filteredMenuItems = menuItemsArray.filter(menu => menu.category === menuCategory)

    if (menuCategory === 'all') {
      displayMenuItems(menuItemsArray)
    } else {

      displayMenuItems(filteredMenuItems)
    }
  })
})



// functions
function displayMenuItems(arr) {

  let newMenuItemsArray = arr.map(function (menu) {

    let { img, title, price, desc } = menu
    return `<article class="menu-item">
              <img src=${img} alt=${title} class="photo" />
              <div class="item-info">
                <header>
                  <h4>${title}</h4>
                  <h4 class="price">${price}</h4>
                </header>
                <p class="item-text">${desc}</p>              
              </div>
            </article>
            `;
  }).join('')

  sectionCenterDivElmnt.innerHTML = newMenuItemsArray

}