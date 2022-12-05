/*

Two Flavours of exporting data to other files
.............................................

1. default export
2. named export

What would be the differences between the 2 flavours

    > default export (2 ways)

        Exporting
        .........

             1.) Add export default infont of the function

                Exporting Arrays
                ----------------
                    export default ['item1','item2',...]

                Exporting Objects
                -----------------
                    export default {name : 'Alex',...}


                Exporting Functions
                -------------------

                 export default (people)=> {
                    const employeesHTML = people.map(({name,job}) => {
                        return `<p>${name} <strong>${job}</strong></p>`
                    }).join('')

                     // contentDivElmnt.innerHTML = employeesHTML
                        return employeesHTML
                    }

            - Not really helpful when you are checking errors

                

            2.) Set up your functionality and add export default function_name

                const showPeople = (people)=> {
                    const employeesHTML = people.map(({name,job}) => {
                        return `<p>${name} <strong>${job}</strong></p>`
                    }).join('')

                     // contentDivElmnt.innerHTML = employeesHTML
                        return employeesHTML
                    }

                export default showPeople

            - WE CAN ONLY HAVE 1 DEFAULT EXPORT IN A FILE

         Importing
        ...........

            - with default export , we can call it whatever we want

                 import whatever from './utils/showPeople.js' 
                 

    > syntax 
    
        import whatever from '/relative path' - named export
            
            import {randomValue , ..} from './utils/data.js'

    > extension is mandatory
*/


const showPeople = (people)=> {
    const employeesHTML = people.map(({name,job}) => {
        return `<p>${name} <strong>${job}</strong></p>`
    }).join('')
    // contentDivElmnt.innerHTML = employeesHTML
    return employeesHTML
}


export default showPeople