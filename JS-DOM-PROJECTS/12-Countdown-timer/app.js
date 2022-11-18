/*

  WORKING WITH DATES
  ....................... 

    > current date new Date()
        - returns current date  
        -e.g
            let now = new Date()      

    > future date
        - Specify future date in the Date(2022,11,17,17,12,0,0) function

        e.g new Date(year:number,
                     month:number, 0-index based [0-11]
                     date:number, [1 - 30/31]
                     hours:number, [0 - 24]
                     min:number,
                     sec:number, 
                     ms:number 
                     )
                     
          e.g 

          let futureDate = new Date(2022,11,17,17,12,0,0);


        > 
    
    FUNCTIONS ON DATE
    ...................... 

   How to get Year / Month / Days / Date / Hours / Minutes /Seconds / Milliseconds
   --------------------------------------------------------------------------------
    
      > Year

          - returns full year
      
          let year = new Date().getFullYear() 

      > Month 
          - use new Date().getMonth() - returns index
          - use index on monthsArray

          let monthIndex = new Date().getMonth()

          month = monthsArray[monthIndex]

      > Date 

          - returns date in the month

          let date = new Date().getDate()

      > Day 
          - use new Date().getDay() - returns index
          - use index on weekdaysArray

          let weekdayIndex = new Date().getDay()

          weekday = weekdaysArray[weekdayIndex]

      > Hours

          - returns hours ( 0 - 24 ) - 24 hrs

           let hours = new Date().getHours()

      > Minutes

          - returns minutes ( 0 - 60 )

           let minutes = new Date().getMinutes()

      > Seconds

          - returns seconds ( 0 - 60 )

           let seconds = new Date().getSeconds()

      > Milliseconds

          - returns milliseconds ( 0 - 60 )

           let milliseconds = new Date().getMilliseconds()          


*/


const monthsArray = ["January","February","March","April","May","June","July","August", "September","October","November","December"];

const weekdaysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const giveawayH4Elmnt = document.querySelector('.giveaway')
const deadlineDivElmnt = document.querySelector('.deadline')
const deadlineH4FormatElmnt = document.querySelectorAll('.deadline-format h4')

// set a future date when the offer is ending
let futureDate = new Date(2022,11,17,17,12,0,0);


// get year
const year = futureDate.getFullYear()

// get month - 0-index based
const monthIndex = futureDate.getMonth()
const month = monthsArray[monthIndex]

// get date
const date = futureDate.getDate()

// get Day - 0-index based
const weekdayIndex = futureDate.getDay()
const weekday = weekdaysArray[weekdayIndex]

// get hours
const hours = futureDate.getHours()

// get minutes
const minutes = futureDate.getMinutes()

// get seconds
const seconds = futureDate.getSeconds()

// get milliseconds
const milliseconds = futureDate.getMilliseconds()

// Output on the screen
giveawayH4Elmnt.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes} ${hours >= 12 ? 'pm' : 'am'}`
