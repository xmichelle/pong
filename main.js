let canvas
let ctx

let ballX = 50
let ballSpeedX = 5

let ballY = 50
let ballSpeedY = 4

let leftPaddleY = 250
let rightPaddleY = 250

const paddleHeight = 100
const paddleWidth = 10

window.onload = function() {
  canvas = document.querySelector('#gameCanvas')
  ctx = canvas.getContext('2d')

  const framesPerSecond = 30
  setInterval(() => {
    moveBall()
    aiMovement()
    canvasDrawings()
  }, 1000/framesPerSecond)

function calculateMousePosition(evt) {
  const rect = canvas.getBoundingClientRect()
  const root = document.documentElement

  let mouseX = evt.clientX - rect.left - root.scrollLeft
  let mouseY = evt.clientY - rect.top - root.scrollTop

  return { x: mouseX, y: mouseY }
}

canvas.addEventListener('mousemove', event => {
  const mousePosition = calculateMousePosition(event)
  leftPaddleY = mousePosition.y - (paddleHeight/2)
})
}

function aiMovement() {
  let rightPaddleYCenter = rightPaddleY + (paddleHeight/2)
  if (rightPaddleYCenter < (ballY - 30)) {
    rightPaddleY += 6
  }
  else if (rightPaddleY > (ballY + 30)) {
    rightPaddleY -= 6
  }
}

function resetBall() {
  ballSpeedX = -ballSpeedX
  ballX = canvas.width/2
  ballY = canvas.height/2
}

function moveBall() {
  ballX += ballSpeedX
  ballY += ballSpeedY

  if (ballX <= 0) {
    if (ballY > leftPaddleY && ballY < (leftPaddleY + paddleHeight)) {
      ballSpeedX = -ballSpeedX
    }
    else {
      resetBall()
    }
  }
  else if (ballX >= canvas.width) {
    if (ballY > rightPaddleY && ballY < (rightPaddleY + paddleHeight)) {
      ballSpeedX = -ballSpeedX
    }
    else {
      resetBall()
    }
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
  drawRect('white', 0, leftPaddleY, paddleWidth, paddleHeight)

  // right paddle
  drawRect('white', canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight)

  // pong ball
  drawCircle('white', ballX, ballY, 10)

  // score text
  ctx.fillText('Left Score', 100, 100)
  ctx.fillText('Right Score', canvas.width - 100, 100)
}

function drawRect(color, xCoordinate, yCoordinate, width, height) {
  ctx.fillStyle = color
  ctx.fillRect(xCoordinate, yCoordinate, width, height)
}

function drawCircle(color, circleX, circleY, radius) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(circleX, circleY, radius, 0, Math.PI*2, true)
  ctx.fill()
}
