/*

Two Flavours of exporting data to other files
.............................................

    > default export

        -


    > named export

        - add export keyword infront of the variable
            export const randomValue = 'random value'

        - Inorder to access it - we need to import it where we need to work with it using the same name as the variable

    > syntax 
    
        import { variable } from '/relative path' - named export
            
            import {randomValue , ..} from './utils/data.js'

    > extension is mandatory
*/


export const randomValue = 'random value'

export const employeesObj = [
    { name : 'Alex' ,job : 'developer' },
    { name : 'Susan' ,job : 'designer' },
    { name : 'Anna' ,job : 'CEO' }
]