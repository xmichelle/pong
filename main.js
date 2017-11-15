let canvas
let canvasContext

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

  canvasContext.fillStyle = 'white'
  canvasContext.fillRect(100, 100, 10, 10)
}
