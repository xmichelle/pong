let canvas
let canvasContext
let ballX = 50
let ballSpeedX = 5

window.onload = function() {
  canvas = document.querySelector('#gameCanvas')
  canvasContext = canvas.getContext('2d')

  const framesPerSecond = 30
  setInterval(() => {
    moveBall()
    canvasDrawings()
  }, 1000/framesPerSecond)
}

function moveBall() {
  ballX += ballSpeedX
  if (ballX <= 0) {
    ballSpeedX = -ballSpeedX
  }
  else if (ballX >= canvas.width) {
    ballSpeedX = -ballSpeedX
  }
}

function canvasDrawings() {

  // black background
  drawRect('black', 0, 0, canvas.width, canvas.height)

  // left paddle
  drawRect('white', 0, 210, 10, 100)

  // pong ball
  drawCircle('white', ballX, 100, 10)
}

function drawRect(color, xCoordinate, yCoordinate, width, height) {
  canvasContext.fillStyle = color
  canvasContext.fillRect(xCoordinate, yCoordinate, width, height)
}

function drawCircle(color, circleX, circleY, radius) {
  canvasContext.fillStyle = color
  canvasContext.beginPath()
  canvasContext.arc(circleX, circleY, radius, 0, Math.PI*2, true)
  canvasContext.fill()
}
