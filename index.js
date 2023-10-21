const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(20, 100, 150);
camera.lookAt(0, 0, 0);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

function updateCamera() {
  // 카메라 투영 매트릭스를 업데이트
  camera.updateProjectionMatrix();
}

// 카메라의 속성을 변경할 때마다 업데이트
const gui = new dat.GUI();
gui.add(camera, "fov", 25, 100).onChange(updateCamera);

const scene = new THREE.Scene();


const floorTexture = new THREE.TextureLoader().load('resources/textures/floorTile.jpg');

const planeSize = 6;

floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.mapFilter = THREE.NearestFilter;
const repeats = planeSize / 2;
floorTexture.repeat.set(repeats, repeats);

const x_planeGeometry = new THREE.PlaneGeometry(60, 60, 2, 2);
const x_planeMaterial = new THREE.MeshBasicMaterial({
  map: floorTexture,
  side: THREE.DoubleSide,
});
const x_plane = new THREE.Mesh(x_planeGeometry, x_planeMaterial);
x_plane.receiveShadow = true;
x_plane.rotation.x = -0.5 * Math.PI;
x_plane.position.x = 0;
x_plane.position.y = -20;
x_plane.position.z = 0;
scene.add(x_plane);

const wallTexture = new THREE.TextureLoader().load('resources/textures/wall.jpg');

const y_planeGeometry = new THREE.PlaneGeometry(60, 40, 2, 2);
const y_planeMaterial = new THREE.MeshBasicMaterial({
  map: wallTexture,
  side: THREE.DoubleSide,
});
const y_plane = new THREE.Mesh(y_planeGeometry, y_planeMaterial);
y_plane.receiveShadow = true;
y_plane.rotation.y = -0.5 * Math.PI;
y_plane.position.x = -30;
y_plane.position.y = 0;
y_plane.position.z = 0;
scene.add(y_plane);

const z_planeGeometry = new THREE.PlaneGeometry(60, 40, 2, 2);
const z_planeMaterial = new THREE.MeshBasicMaterial({
  map: wallTexture,
  side: THREE.DoubleSide,
});
const z_plane = new THREE.Mesh(z_planeGeometry, z_planeMaterial);
z_plane.receiveShadow = true;
z_plane.rotation.x = -1 * Math.PI;
z_plane.position.x = 0;
z_plane.position.y = 0;
z_plane.position.z = -30;
scene.add(z_plane);


function animate() {
  requestAnimationFrame(animate);
  controls.update();
  // 여기에서 카메라나 물체의 변환을 조작할 수 있습니다.
  renderer.render(scene, camera);
}
animate();
