export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const buttonTree = new Audio ("./sounds/Floresta.wav")
  const buttonRain = new Audio ("./sounds/Chuva.wav")
  const buttonCoffe = new Audio ("./sounds/Cafeteria.wav")
  const buttonFire = new Audio ("./sounds/Lareira.wav")

  buttonTree.loop = true
  buttonRain.loop = true
  buttonCoffe.loop = true
  buttonFire.loop = true

  function timeEnd() {
    kitchenTimer.play()
  }


  return {
    buttonPressAudio,
    kitchenTimer,
    buttonTree,
    buttonRain,
    buttonCoffe,
    buttonFire,
    timeEnd
  }
}