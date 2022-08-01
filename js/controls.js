export default function Controls (
  {buttonPlay,
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
   buttonSoundCoffeShop2}) {

  function play () {
    buttonPlay.classList.add('hide')
    buttonPlay2.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonStop2.classList.add('hide')
  }

  function stopControls () {
    buttonPlay2.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonStop2.classList.remove('hide')
  }


  function colorButtonTree () {
    buttonSoundTree.classList.add('hide')
    buttonSoundTree2.classList.remove('hide')
  }
  function colorButtonTree2 () {
    buttonSoundTree.classList.remove('hide')
    buttonSoundTree2.classList.add('hide')
  }

  function colorButtonFire () {
    buttonSoundFire.classList.add('hide')
    buttonSoundFire2.classList.remove('hide')
  }
  function colorButtonFire2 () {
    buttonSoundFire.classList.remove('hide')
    buttonSoundFire2.classList.add('hide')
  }

  function colorButtonCoffeShop () {
    buttonSoundCoffeShop.classList.add('hide')
    buttonSoundCoffeShop2.classList.remove('hide')
  }
  function colorButtonCoffeShop2 () {
    buttonSoundCoffeShop.classList.remove('hide')
    buttonSoundCoffeShop2.classList.add('hide')
  }

  function colorButtonRain () {
    buttonSoundRain.classList.add('hide')
    buttonSoundRain2.classList.remove('hide')
  }
  function colorButtonRain2 () {
    buttonSoundRain.classList.remove('hide')
    buttonSoundRain2.classList.add('hide')
  }


  return{
    play,
    stopControls,
    colorButtonTree,
    colorButtonFire,
    colorButtonRain,
    colorButtonCoffeShop,
    colorButtonTree2,
    colorButtonFire2,
    colorButtonRain2,
    colorButtonCoffeShop2
  }
}