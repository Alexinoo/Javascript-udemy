
// Dad Jokes URL -Endpoint
const url = 'https://icanhazdadjoke.com/'

const btnElmnt = document.querySelector('.btn')
const pElmnt = document.querySelector('.result')

// diplay when application loads
window.addEventListener('DOMContentLoaded',()=>{
    fetchDadJoke()
})

// Click event - invoke fetchDadJoke()
btnElmnt.addEventListener('click',async()=>{
    fetchDadJoke()
})


// fetch(url , {})
// fetch also takes in a second parameter which is an {}
// More info about our request Info / 
// Mostly useful with POST

const fetchDadJoke = async()=> {
    
    try {
        pElmnt.style.color = '#000000'
        pElmnt.textContent = 'Loading...'

        const response = await fetch(url ,{
        headers : {
            Accept : 'applications/json',
            'User-Agent' : 'learning app'
        }
        })
        
        const {joke} = await response.json()
        pElmnt.textContent = joke

    }
     catch (error) {
         pElmnt.style.color = 'red'
         pElmnt.innerHTML = 'There was some error getting the data !!..'
    }
    
}