
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
            Accept : 'application/json',
            'User-Agent' : 'learning app'
        }
        })

        if(!response.ok){
            // console.log({ok : response.ok ,status : response.status,          statusText : response.statusText
            // });
            throw new Error('resource not found!!!..')
        }
        
        const {joke} = await response.json()
        pElmnt.textContent = joke

    }
     catch ({message}) {
        // access the error that was thrown error.message or destructure right away
         pElmnt.style.color = 'red'
         pElmnt.innerHTML = 'there was an error..'
    }
    
}