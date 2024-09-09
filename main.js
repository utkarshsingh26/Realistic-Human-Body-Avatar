// Import necessary components from Three.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Load an FBX model
const loader = new FBXLoader();
loader.load(
  'X-BOT.fbx', // Path to your FBX model
  function (fbx) {
    scene.add(fbx);
    animate();
  },
  undefined,
  function (error) {
    console.error('An error happened while loading the FBX model:', error);
  }
);

// Camera controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;
controls.update();

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
