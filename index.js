import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(10, 5, 90);
camera.lookAt(0, 0, 0);

const updateCamera = () => {
  // 카메라 투영 매트릭스를 업데이트
  camera.updateProjectionMatrix();
};

//GLTF 파일 로더
const loader = new GLTFLoader();

loader.load(
  // resource URL
  "resources/models/floor_lamp/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    gltf.scene.castShadow = true;
    gltf.scene.position.set(-25, -20, -25);
    gltf.scene.rotation.set(0, 0, 0);
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    // console.log('position', gltf.scene.position);
    // console.log('scale', gltf.scene.scale);
    // console.log(gltf);
    scene.add(gltf.scene);
  },
  // called while loading is progressing
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  (err) => {
    console.log(`An error happened : ${err}`);
  }
);

loader.load(
  // resource URL
  "resources/models/desk_with_pc/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    gltf.scene.castShadow = true;
    gltf.scene.position.set(0, -20, -26.5);
    gltf.scene.rotation.set(0, -0.5 * Math.PI, 0);
    gltf.scene.scale.set(0.03, 0.03, 0.03);
    // console.log('position', gltf.scene.position);
    // console.log('scale', gltf.scene.scale);
    // console.log(gltf);
    scene.add(gltf.scene);
  },
  // called while loading is progressing
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  (err) => {
    console.log(`An error happened : ${err}`);
  }
);

loader.load(
  // resource URL
  "resources/models/gaming_chair/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    gltf.scene.castShadow = true;
    gltf.scene.position.set(0, -15, -20);
    gltf.scene.rotation.set(0, 180, 0);
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    // console.log('position', gltf.scene.position);
    // console.log('scale', gltf.scene.scale);
    // console.log(gltf);
    scene.add(gltf.scene);
  },
  // called while loading is progressing
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  (err) => {
    console.log(`An error happened : ${err}`);
  }
);

loader.load(
  // resource URL
  "resources/models/wall_decoration_picture/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    gltf.scene.castShadow = true;
    gltf.scene.position.set(-29, 0, 0);
    gltf.scene.rotation.set(0, 0, 0);
    gltf.scene.scale.set(10, 10, 10);
    // console.log('position', gltf.scene.position);
    // console.log('scale', gltf.scene.scale);
    // console.log(gltf);
    scene.add(gltf.scene);
  },
  // called while loading is progressing
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  (err) => {
    console.log(`An error happened : ${err}`);
  }
);

loader.load(
  // resource URL
  "resources/models/wall_clock/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    gltf.scene.castShadow = true;
    gltf.scene.position.set(-20, 10, -29);
    gltf.scene.rotation.set(0, -0.5 * Math.PI, 0);
    gltf.scene.scale.set(7, 7, 7);
    // console.log('position', gltf.scene.position);
    // console.log('scale', gltf.scene.scale);
    // console.log(gltf);
    scene.add(gltf.scene);
  },
  // called while loading is progressing
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  (err) => {
    console.log(`An error happened : ${err}`);
  }
);

// 카메라의 속성을 변경할 때마다 업데이트
const gui = new dat.GUI();
gui.add(camera, "fov", 25, 100).onChange(updateCamera);

// Scene 추가
const scene = new THREE.Scene();

// 조명 추가 (모델들이 검은 색으로 보여서 추가)
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// pointLight
const pointLight = new THREE.PointLight(0xffa500, 100, 100);
pointLight.position.set(-25, -6, -25);
pointLight.castShadow = true;
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
scene.add(pointLightHelper);

// 바닥 스킨
const floorTexture = new THREE.TextureLoader().load(
  "resources/textures/floorTile.jpg"
);

//바닥 설정
const planeSize = 8;

floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.mapFilter = THREE.NearestFilter;
const repeats = planeSize / 2;
floorTexture.repeat.set(repeats, repeats);

// 바닥 plane
const x_planeGeometry = new THREE.PlaneGeometry(60, 60, 2, 2);
const x_planeMaterial = new THREE.MeshStandardMaterial({
  map: floorTexture,
  // color: 0xff00ff,
  side: THREE.DoubleSide,
});
const x_plane = new THREE.Mesh(x_planeGeometry, x_planeMaterial);
x_plane.receiveShadow = true;
x_plane.rotation.x = -0.5 * Math.PI;
x_plane.position.x = 0;
x_plane.position.y = -20;
x_plane.position.z = 0;
scene.add(x_plane);

//천장
const x_plane2 = new THREE.Mesh(x_planeGeometry, x_planeMaterial);
x_plane2.receiveShadow = true;
x_plane2.rotation.x = -0.5 * Math.PI;
x_plane2.position.x = 0;
x_plane2.position.y = 20;
x_plane2.position.z = 0;
scene.add(x_plane2);

const wallTexture = new THREE.TextureLoader().load(
  "resources/textures/wall.jpg"
);

// 벽 plane ( y, z )
const y_planeGeometry = new THREE.PlaneGeometry(60, 40, 2, 2);
const y_planeMaterial = new THREE.MeshStandardMaterial({
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
const z_planeMaterial = new THREE.MeshStandardMaterial({
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

const controls = new PointerLockControls(camera, renderer.domElement);

const startButton = document.getElementById("startButton");
const notice = document.getElementById("notice");
startButton.addEventListener(
  "click",
  () => {
    controls.lock();
  },
  false
);

controls.addEventListener("lock", () => {
  menuPanel.style.display = "none";
  notice.style.display = "block";
});
controls.addEventListener("unlock", () => {
  menuPanel.style.display = "block";
  notice.style.display = "none";
});

const moveSpeed = 2;
const option = {
  moveSpeed: 1,
};
const updateMoveSpeed = () => {
  console.log(option.moveSpeed);
};
gui.add(option, "moveSpeed", 0.5, 5).onChange(updateMoveSpeed);

const onKeyDown = (event) => {
  switch (event.code) {
    case "KeyW":
      controls.moveForward(moveSpeed);
      break;
    case "KeyA":
      controls.moveRight(-moveSpeed);
      break;
    case "KeyS":
      controls.moveForward(-moveSpeed);
      break;
    case "KeyD":
      controls.moveRight(moveSpeed);
      break;
  }
};

document.addEventListener("keydown", onKeyDown, false);

const animate = () => {
  requestAnimationFrame(animate);
  // 여기에서 카메라나 물체의 변환을 조작할 수 있습니다.
  renderer.render(scene, camera);
};
animate();
