import {
  buttonPlay,
  buttonPlay2,
  buttonStop,
  buttonStop2,
  buttonPlus,
  buttonLess,
  buttonSoundTree,
  buttonSoundTree2,
  buttonSoundRain,
  buttonSoundRain2,
  buttonSoundCoffeShop,
  buttonSoundCoffeShop2,
  buttonSoundFire,
  buttonSoundFire2
} from "./elements.js"

export default function Events ({controls, timer, sound}) {
 
  buttonPlay.addEventListener('click', function () {
    controls.play()
    sound.buttonPressAudio.play ()
    timer.stopTime ()
    timer.countDown ()
  }) 
  
  buttonPlay2.addEventListener('click', function () {
    sound.buttonPressAudio.play ()
    timer.stopTime()
    timer.countDown ()
  }) 
  
  
  buttonStop.addEventListener('click', function () {
    controls.stopControls()
    timer.stopTime ()
    sound.buttonPressAudio.play ()
  }) 

  buttonStop2.addEventListener('click', function () {
    sound.buttonPressAudio.play ()
  }) 
  
  
  buttonSoundTree.addEventListener('click', function () {
    controls.colorButtonTree ()
    sound.buttonTree.play ()
  }) 
  buttonSoundTree2.addEventListener('click', function () {
    controls.colorButtonTree2 ()
    sound.buttonTree.pause ()
  }) 
  
  
  buttonSoundRain.addEventListener('click', function () {
    controls.colorButtonRain ()
    sound.buttonRain.play ()
  }) 
  buttonSoundRain2.addEventListener('click', function () {
    controls.colorButtonRain2 ()
    sound.buttonRain.pause ()
  }) 
  
  buttonSoundCoffeShop.addEventListener('click', function () {
    controls.colorButtonCoffeShop ()
    sound.buttonCoffe.play ()
  }) 
  buttonSoundCoffeShop2.addEventListener('click', function () {
    controls.colorButtonCoffeShop2 ()
    sound.buttonCoffe.pause ()
  }) 
  
  buttonSoundFire.addEventListener('click', function () {
    controls.colorButtonFire ()
    sound.buttonFire.play ()
  }) 
  buttonSoundFire2.addEventListener('click', function () {
    controls.colorButtonFire2 ()
    sound.buttonFire.pause ()
  }) 

  buttonPlus.addEventListener('click', function () {
    sound.buttonPressAudio.play ()
    timer.plusMinutes ()
  })
  

  buttonLess.addEventListener('click', function () {
    sound.buttonPressAudio.play ()
    timer.lessMinutes ()
  })

}