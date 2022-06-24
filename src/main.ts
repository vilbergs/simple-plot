import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { points } from './functions'

const createScene = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  scene.add(new THREE.AxesHelper(5))
  scene.add(new THREE.GridHelper(10, 10))

  camera.position.z = 5

  document.addEventListener('keydown', (e) => {
    e.preventDefault()

    switch (e.key) {
      case 'ArrowUp':
        if (e.metaKey) {
          camera.rotation.x -= 0.1
        } else if (e.shiftKey) {
          camera.position.y += 0.1
        } else {
          camera.position.z -= 0.1
        }
        break
      case 'ArrowDown':
        if (e.metaKey) {
          camera.rotation.x += 0.1
        } else if (e.shiftKey) {
          camera.position.y -= 0.1
        } else {
          camera.position.z += 0.1
        }
        break
      case 'ArrowRight':
        if (e.metaKey) {
          camera.rotation.y -= 0.1
        } else if (e.shiftKey) {
          camera.position.x += 0.1
        }
        break
      case 'ArrowLeft':
        if (e.metaKey) {
          camera.rotation.y += 0.1
        } else if (e.shiftKey) {
          camera.position.x -= 0.1
        }
      default:
        break
    }
  })

  const controls = new OrbitControls(camera, renderer.domElement)

  //controls.update() must be called after any manual changes to the camera's transform
  camera.position.set(0, 10, 10)
  controls.update()

  function animate() {
    requestAnimationFrame(animate)

    controls.update()

    renderer.render(scene, camera)
  }

  animate()

  return {
    scene,
    draw: (...args: THREE.Object3D<THREE.Event>[]) => scene.add(...args),
  }
}

const { draw } = createScene()

draw(points([1, 1, 1]))
