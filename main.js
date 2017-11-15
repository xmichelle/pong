let canvas
let canvasContext
let ballX = 50
let ballSpeedX = 5

window.onload = function() {
  canvas = document.querySelector('#gameCanvas')
  canvasContext = canvas.getContext('2d')

  setInterval(() => {
    moveBall()
    canvasDrawings()
  }, 1000)
}

function moveBall() {
  ballX += 5
}

function canvasDrawings() {
  canvasContext.fillStyle = 'black'
  canvasContext.fillRect(0, 0, canvas.width, canvas.height)

  canvasContext.fillStyle = 'white'
  canvasContext.fillRect(0, 210, 10, 100)

  drawCircle('white', ballX, 100, 10)
}

function drawCircle(color, circleX, circleY, radius) {
  canvasContext.fillStyle = color
  canvasContext.beginPath()
  canvasContext.arc(circleX, circleY, radius, 0, Math.PI*2, true)
  canvasContext.fill()
}
