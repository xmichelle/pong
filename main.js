let canvas
let canvasContext
let ballX = 50
let ballSpeedX = 5

window.onload = function() {
  canvas = document.querySelector('#gameCanvas')
  canvasContext = canvas.getContext('2d')
  canvasDrawings()
}

function canvasDrawings() {
  canvasContext.fillStyle = 'black'
  canvasContext.fillRect(0, 0, canvas.width, canvas.height)

  canvasContext.fillStyle = 'white'
  canvasContext.fillRect(0, 210, 10, 100)

  // draws the ball
  canvasContext.fillStyle = 'white'
  canvasContext.beginPath()
  canvasContext.arc(50, 100, 10, 0, Math.PI*2, true)
  canvasContext.fill()
}
