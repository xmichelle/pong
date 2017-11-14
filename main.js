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
}
