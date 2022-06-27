import * as THREE from 'three'
import { Vector3 } from 'three'
import { Vector } from './types'

export const points = (...vectors: Vector[]) => {
  const geometry = new THREE.BufferGeometry()
  const material = new THREE.PointsMaterial({ size: 0.1 })
  const vertices = new Float32Array(vectors.flat(1))

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  const points = new THREE.Points(geometry, material)

  return points
}

export const arrow = (v: Vector) => {
  const arrow = new THREE.ArrowHelper(
    new Vector3(...v).normalize(),
    new Vector3(0, 0, 0),
    length(v),
    0xff0000,
    0.15,
    0.15
  )

  return arrow
}

export const segment = (origin: Vector, destination: Vector) => {
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

  const geometry = new THREE.BufferGeometry().setFromPoints([
    new Vector3(...origin),
    new Vector3(...destination),
  ])

  const line = new THREE.Line(geometry, material)

  return line
}

export const box = (v: Vector) => {
  const box = new THREE.Box3()
  box.set(new THREE.Vector3(0, 0, 0), new THREE.Vector3(...v))
  const helper = new THREE.Box3Helper(box, new THREE.Color(0xffff00))

  return helper
}
