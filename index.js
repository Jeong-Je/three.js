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

// 키보드 WASD로 카메라 시선 x,y값 조정
// window.addEventListener("keydown", (e) => {
//   if(e.key === 'w'){
//     camera.position.x -= 1;
//   }
// });

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

const updateCamera = () => {
  // 카메라 투영 매트릭스를 업데이트
  camera.updateProjectionMatrix();
}


//OBJ 파일 로더
const loader = new THREE.OBJLoader();

loader.load(
  "resources/models/ikea_table.obj",

  function (object) {
    object.scale.setScalar(0.1);
    object.position.y = -18.5;
    object.position.x = -25;
    scene.add(object);
  },

  function (xhr) {
    console.log(`Ikea table : ${(xhr.loaded / xhr.total) * 100} % loaded`);
  },

  function (err) {
    console.log(`An error happend :  ${err}`);
  }
);

loader.load(
  "resources/models/desk.obj",

  function (object) {
    object.scale.setScalar(0.1);
    object.castShadow = true;
    console.log(object);
    object.rotation.x = -0.5 * Math.PI;
    object.rotation.z = Math.PI;
    object.position.z = -25;
    object.position.y = -20;
    scene.add(object);
  },

  function (xhr) {
    console.log(`Ikea table : ${(xhr.loaded / xhr.total) * 100} % loaded`);
  },

  function (err) {
    console.log(`An error happend :  ${err}`);
  }
);


// 카메라의 속성을 변경할 때마다 업데이트
const gui = new dat.GUI();
gui.add(camera, "fov", 25, 100).onChange(updateCamera);

// Scene 추가
const scene = new THREE.Scene();


// 조명 추가 (OBJ 모델들이 검은 색으로 보여서 추가)
const ambientLight = new THREE.AmbientLight(0x000000, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 5);
scene.add(pointLight);


// 바닥 스킨
const floorTexture = new THREE.TextureLoader().load(
  "resources/textures/floorTile.jpg"
);


//바닥 설정
const planeSize = 6;

floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.mapFilter = THREE.NearestFilter;
const repeats = planeSize / 2;
floorTexture.repeat.set(repeats, repeats);

// 바닥 plane
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

const wallTexture = new THREE.TextureLoader().load(
  "resources/textures/wall.jpg"
);


// 벽 plane ( y, z )
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


const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  // 여기에서 카메라나 물체의 변환을 조작할 수 있습니다.
  renderer.render(scene, camera);
}
animate();
