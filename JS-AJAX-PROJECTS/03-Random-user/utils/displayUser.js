import $ from './getElement.js'

// select Elements
const imgElmnt = $('.user-img')
const userTitleParaElmnt = $('.user-title')
const uservalueParaElmnt = $('.user-value')


const iconBtnElmnts = [...document.querySelectorAll('.icon')]

const displayUser = (person)=> {

    // update image and name
   imgElmnt.src = person.image
   uservalueParaElmnt.textContent = person.name 
   userTitleParaElmnt.textContent = `My name is`

    // remove the .active from all before loading new user 
   iconBtnElmnts.forEach(btn=>btn.classList.remove('active'))

    // add .active class to the first icon by default
   iconBtnElmnts[0].classList.add('active')

    //iterate and listen for click on the other icons
    iconBtnElmnts.forEach(btn => {
        btn.addEventListener('click',(e)=>{
            const label = e.currentTarget.dataset.label

            //dynamically access values using person[label] e.g. person['email'],person['age]
            //  console.log(person[label]);

            // update info
            userTitleParaElmnt.textContent = `My ${label} is`
            uservalueParaElmnt.textContent = person[label]

            // add .active class to the clicked button : Remove first before adding
            iconBtnElmnts.forEach(btn=>btn.classList.remove('active'))
            btn.classList.add('active')
        })
    })

}

export default displayUser