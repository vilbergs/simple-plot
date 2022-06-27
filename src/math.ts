import { Vector } from './types'

function length(v: Vector): number {
  return Math.sqrt(v.reduce((sum, n) => sum + Math.pow(n, 2), 0))
}

function add(v1: Vector, v2: Vector): Vector {
  if (v1.length === 2 && v2.length === 2) {
    return [v1[0] + v2[0], v1[1] + v2[1]]
  }

  if (v1.length === 3 && v2.length === 3) {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]]
  }

  throw RangeError('Cannot add vectors. Both vectors must be of length 2 or 3')
}

function scale(v: Vector, factor: number): Vector {
  return v.map((n) => n * factor) as Vector
}

function dot(v1: Vector, v2: Vector): number {
  if (v1.length === 2 && v2.length === 2) {
    return v1[0] * v2[0] + v1[1] * v2[1]
  }

  if (v1.length === 3 && v2.length === 3) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v2[2] * v2[2]
  }

  throw RangeError(
    'Cannot compute dot product. Both vectors must be of length 2 or 3'
  )
}

function cross() {}

export { length, dot, cross, add, scale }
