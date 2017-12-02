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

let leftScore = 0
let rightScore = 0
const winningScore = 3

let showWinScreen = false

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

canvas.addEventListener('click', event => {
  if (showWinScreen) {
    leftScore = 0
    rightScore = 0
    showWinScreen = false
  }
})

canvas.addEventListener('mousemove', event => {
  const mousePosition = calculateMousePosition(event)
  leftPaddleY = mousePosition.y - (paddleHeight/2)
})
}

function aiMovement() {
  let rightPaddleYCenter = rightPaddleY + (paddleHeight/2)
  if (rightPaddleYCenter < (ballY - 30)) {
    rightPaddleY += 8
  }
  else if (rightPaddleYCenter > (ballY + 30)) {
    rightPaddleY -= 8
  }
}

function resetBall() {
  if (leftScore >= winningScore || rightScore >= winningScore) {
    // leftScore = 0
    // rightScore = 0
    showWinScreen = true
  }
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
      let deltaY = ballY - (leftPaddleY + (paddleHeight/2))
      ballSpeedY = deltaY * 0.35
    }
    else {
      rightScore++ // score needs to be before ball reset
      resetBall()
    }
  }
  else if (ballX >= canvas.width) {
    if (ballY > rightPaddleY && ballY < (rightPaddleY + paddleHeight)) {
      ballSpeedX = -ballSpeedX
      let deltaY = ballY - (rightPaddleY + (paddleHeight/2))
      ballSpeedY = deltaY * 0.35
    }
    else {
      leftScore++
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

  if (showWinScreen) {
    ctx.fillStyle = 'white'
    if (leftScore >= winningScore) {
      ctx.fillText('Left Player Won!', 350, 200)
    }
    else if (rightScore >= winningScore) {
      ctx.fillText('Right Player Won!', 350, 200)
    }
    ctx.fillText('Click To Play Again', 350, 500)
    return
  }

  drawNet()

  // left paddle
  drawRect('white', 0, leftPaddleY, paddleWidth, paddleHeight)

  // right paddle
  drawRect('white', canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight)

  // pong ball
  drawCircle('white', ballX, ballY, 10)

  // score text
  ctx.fillText(leftScore, 100, 100)
  ctx.fillText(rightScore, canvas.width - 100, 100)
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

function drawNet() {
  for (let i = 0; i < canvas.height; i += 40) {
    drawRect('white',canvas.width/2, i, 2, 20)
  }
}
