import Sounds from "./sounds.js"


export default function Timer 
({minutesDisplay,
  secondsDisplay,
  controlStop})

  {
  let timeTimerOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)


  function updateTimerDisplay (minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  
  function resetTime () {
    updateTimerDisplay (minutes, 0)
  }
  
  
  function resetZero () {
   updateTimerDisplay (0, 0)
   controlStop()
  }
  
  
  function stopTime () {
    clearTimeout (timeTimerOut)
  }
  
  


  function countDown () {
    timeTimerOut = setTimeout (function () {

      let newSeconds = Number(secondsDisplay.textContent)
  
      updateTimerDisplay (newMinutes, 0)
  
     if (newMinutes <= 0 && newSeconds <= 0){
      resetTime ()
      controlStop()
      Sounds().timeEnd()
      return
     }
  
      if (newSeconds <= 0) {
       newSeconds = 4
       --newMinutes
      }
  
      updateTimerDisplay (newMinutes, String(newSeconds - 1))
      
  
      countDown ()

    }, 1000)
  }

  let newMinutes = Number(minutesDisplay.textContent)
  let newSeconds = Number(secondsDisplay.textContent)


  
  function plusMinutes () {
   newMinutes = newMinutes + 5
   updateTimerDisplay (String(newMinutes ), 0)  
  return
  }


  function lessMinutes () {
    if(newMinutes <= 0) {
      resetTime()
      newMinutes = minutes
    } else {
     newMinutes = newMinutes - 5
     updateTimerDisplay (String(newMinutes), 0)
   }
 }




  return {
    updateTimerDisplay,
    resetTime,
    resetZero,
    stopTime,
    countDown,
    plusMinutes,
    lessMinutes
  }

}
