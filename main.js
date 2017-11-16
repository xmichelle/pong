let canvas
let canvasContext

let ballX = 50
let ballSpeedX = 5

let ballY = 50
let ballSpeedY = 4

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
  ballY += ballSpeedY

  if (ballX <= 0) {
    ballSpeedX = -ballSpeedX
  }
  else if (ballX >= canvas.width) {
    ballSpeedX = -ballSpeedX
  }
  else if (ballY <= 0) {
    ballSpeedY = -ballSpeedY
  }
  else if (ballY >= canvas.height) {
    ballSpeedY = -ballSpeedY
  }
}

function canvasDrawings() {

  // black background
  drawRect('black', 0, 0, canvas.width, canvas.height)

  // left paddle
  drawRect('white', 0, 210, 10, 100)

  // pong ball
  drawCircle('white', ballX, ballY, 10)
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
