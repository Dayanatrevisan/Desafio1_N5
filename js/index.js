import Sound from "./sounds.js"
import Events from "./events.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import {
  buttonPlay,
  buttonPlay2,
  buttonStop,
  buttonStop2,
  buttonPlus,
  buttonLess,
  minutesDisplay,
  secondsDisplay,
  buttonSoundTree,
  buttonSoundTree2,
  buttonSoundRain,
  buttonSoundRain2,
  buttonSoundCoffeShop,
  buttonSoundCoffeShop2,
  buttonSoundFire,
  buttonSoundFire2
} from "./elements.js"


//elements



const controls = Controls({
  buttonPlay,
  buttonPlay2,
  buttonStop, 
  buttonStop2,
  buttonSoundTree,
  buttonSoundTree2,
  buttonSoundFire,
  buttonSoundFire2,
  buttonSoundRain,
  buttonSoundRain2,
  buttonSoundCoffeShop,
  buttonSoundCoffeShop2
})



const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  controlStop: controls.stopControls
})


const sound = Sound()


Events({controls, timer, sound})









