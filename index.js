const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')

let cells = 0
const cellSize = 40

const pointsInGrid = []

const el = document.getElementById('plot')
el.appendChild(canvas)

points([2, 2])

function resize() {
  const largestPoint = pointsInGrid.reduce((largestPoint, v) => {
    return Math.max(Math.abs(v[0]), Math.abs(v[1]), largestPoint)
  }, 0)

  console.log(largestPoint)

  const paddingCells = 1
  cells = largestPoint + paddingCells
  const size = cells * 2 * cellSize + 1

  canvas.width = size
  canvas.height = size

  grid(size, size)
}

function grid(width, height) {
  context.beginPath()
  context.strokeStyle = 'lightgray'

  for (const x of range(0, width, cellSize)) {
    context.moveTo(0.5 + x, 0)
    context.lineTo(0.5 + x, height)
  }

  for (const x of range(0, height, cellSize)) {
    context.moveTo(0, 0.5 + x)
    context.lineTo(width + 0, 0.5 + x)
  }

  context.stroke()

  context.beginPath()

  context.strokeStyle = 'black'

  context.moveTo(0.5 + width / 2, 0)
  context.lineTo(0.5 + width / 2, height)

  context.moveTo(0, 0.5 + height / 2)
  context.lineTo(width, 0.5 + height / 2)

  context.stroke()
}

function* range(from, to, step = 1) {
  let value = from
  while (value <= to) {
    yield value
    value += step
  }
}

function points(...vectors) {
  vectors.forEach((v) => pointsInGrid.push(v))
  resize()

  const center = [canvas.width / 2, canvas.height / 2]

  pointsInGrid.forEach((v) => {
    // Make sure point position is relative to cell size
    const x = v[0] * cellSize
    const y = v[1] * -cellSize

    const [xFromCenter, yFromCenter] = addVectors(center, [x, y])

    console.log(xFromCenter)

    context.beginPath()
    context.strokeStyle = 'blue'
    context.fillStyle = 'blue'
    context.arc(xFromCenter, yFromCenter, 3, 0, 2 * Math.PI)
    context.stroke()
    context.fill()
  })
}

function addVectors(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]]
}
