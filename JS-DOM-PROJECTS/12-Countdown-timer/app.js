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
// let futureDate = new Date(2022,10,18,13,00,0,0);

/*
Set the countdown so that it does not expire ( To show that the application works )
      ------------------------------------------------------------------------------------

          > Instead of hard coding the future date - set it to always add 10 days every day

             let tempDate = new Date()
             let tempYear = tempDate.getFullYear()
             let tempMonth = tempDate.getMonth()
             let tempDate = tempDate.getDate()

          > Pass it to futureDate

              let futureDate = new Date(tempYear,tempMonth,tempDate + 10,11,30,0,0);
*/

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

let futureDate = new Date(tempYear,tempMonth,tempDay+10,11,30,0,0);


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
giveawayH4Elmnt.innerHTML = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}
 ${hours >= 12 ? `<span style="text-transform:lowercase;">pm</span` :
 `<span style="text-transform:lowercase;">am</span>`}`


/*

      Calculate Remaining Time in Days/Hours/Mins/seconds
      ................................................... 

          > use Date().getTime() - returns time in ms

          > get future date 
          
              futureTime = futureDate.getTime()

          > get current date 
              currentTime = new Date().getTime()

          > Get the remaining time
              remainingTimeInMs = futureTime - currentTime  


      Calculate days/hours/min/sec in Ms
      --------------------------------------------------------------------

          > How many ms are there in 1 day ( 24 * 60 * 60 *1000 )
          > How many ms are there in 1 hr ( 60 * 60 *1000 )
          > How many ms are there in 1 min ( 60 *1000 )


      Calculate how many (days/hours/min/sec) in full are left - Modulus operator
      ----------------------------------------------------------------------------

          > NoOfDaysRemaining 

              e.g Math.floor( remainingTimeInMs / oneDayinMs )

          > NoOfHrsRemaining

              e.g Math.floor( (remainingTimeInMs % oneDayinMs) / OnehourInMS )

          > NoOfMinsRemaining

              e.g Math.floor( (remainingTimeInMs % OnehourInMS) / OneMinInMS )

          > NoOfSecRemaining

              e.g Math.floor( (remainingTimeInMs % OneMinInMS) / 1000 )


      Store NoOfDaysRemaining , NoOfHrsRemaining, NoOfMinsRemaining, NoOfSecRemaining values in array
      ----------------------------------------------------------------------------

          > const values = [NoOfDaysRemaining,NoOfHrsRemaining,NoOfMinsRemaining, NoOfSecRemaining]

          > Loop through the deadlineH4FormatElmnt NodeList and set innerHTML to values[index]

      Use setInterval to run the function repeatedly
      -----------------------------------------------------------

          > store the id from setInterval() in a countdown variable
             let countdown = setInterval(getRemainingTime,1000)

      Clear countdown variable once the remainingTimeInMs expires
      -----------------------------------------------------------

          > Remove the deadlineDivElmnt with the content that the giveaway has expired

           if(remainingTimeInMs < 0){
              clearInterval(countdown)
              deadlineDivElmnt.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired </h4>`
             }

*/


// Future time in ms

const futureTimeInMs = futureDate.getTime()
// console.log('Future time in Ms',futureTimeInMs);


// function

function getRemainingTime(){

  const todayTimeInMs = new Date().getTime()
  // console.log('Today\'s time in MS',todayTimeInMs);

  const remainingTimeInMs = futureTimeInMs - todayTimeInMs

  //console.log('Remaining time in MS',remainingTimeInMs);

  /*
     General Concepts
     ................. 

        1sec    = 1000ms =   1000ms
        1min    = 60sec  =   60*1000ms
        1hr     = 60min  =   60*60*1000ms
        1day    = 24hrs  =   24*60*60*1000ms

  */

    const oneDayinMs = 24 * 60 * 60 *1000
    //console.log('One Day in Ms',oneDayinMs);

    const oneHrinMs = 60*60*1000
    //console.log('One Hour in Ms',oneHrinMs);

    const oneMininMs = 60*1000
    //console.log('One Min in Ms',oneMininMs);

    // Calculate NoOfDaysRemaining , NoOfHrsRemaining , NoOfMinRemaining , NoOfSecRemaining values in Full


    // NoOfDaysRemaining - Days in full (Use Math.floor)

    let NoOfDaysRemaining = Math.floor(remainingTimeInMs / oneDayinMs) // 1.2581301851851852
    //console.log('No of Days remaining',NoOfDaysRemaining);


    // NoOfHrsRemaining  - GOTCHA !!!!
    // Use modulus operator - calculate how many hours are left
 
    let NoOfHrsRemaining = Math.floor( (remainingTimeInMs % oneDayinMs) / oneHrinMs) 
    //console.log('No of Hours remaining',NoOfHrsRemaining);

    // NoOfMinsRemaining  - GOTCHA !!!!
   // Use modulus operator - calculate how many minutes are left
 
    let NoOfMinsRemaining = Math.floor((remainingTimeInMs % oneHrinMs) / oneMininMs)
    //console.log('No of Minutes remaining',NoOfMinsRemaining);

    // NoOfSecRemaining  - GOTCHA !!!!
    // Use modulus operator - calculate how many seconds are left
 
    let NoOfSecRemaining = Math.floor ( (remainingTimeInMs % oneMininMs) / 1000 )
    // console.log('No of Seconds remaining',NoOfSecRemaining);

    const deadLineInDaysHoursMinSecArray = [ NoOfDaysRemaining , NoOfHrsRemaining ,NoOfMinsRemaining, NoOfSecRemaining ]

    function format(item){
      if(item < 10 ){
        return `0${item}`
      }
      return item
    }

    deadlineH4FormatElmnt.forEach(function(deadline , index){
      deadline.textContent =  format ( deadLineInDaysHoursMinSecArray[index] )
    })

    if(remainingTimeInMs < 0){
      clearInterval(countdown)
      deadlineDivElmnt.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired </h4>`
    }
}

// countdown

let countdown = setInterval(getRemainingTime,1000)


// It's important you invoke after the countdown variable
getRemainingTime()
