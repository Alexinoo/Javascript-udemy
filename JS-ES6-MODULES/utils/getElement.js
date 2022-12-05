/*

    1st Flavour of Exporting as default
    ------------------------------------

        const getElementDOM = (selection)=>{
            const element = document.querySelector(selection)
            if(element){
                return element
            }else{

                throw new Error('you did not select element')
            }
        }
        
        export default getElementDOM


     2nd Flavour of Exporting as default
    ------------------------------------

    export default (selection)=>{
            const element = document.querySelector(selection)
            if(element){
                return element
            }else{

                throw new Error('you did not select element')
            }
        }

*/

const getElementDOM = (selection)=>{
   const element = document.querySelector(selection)
   if(element){
    return element
   }else{

       throw new Error('you did not select element')
   }
}


export default getElementDOM