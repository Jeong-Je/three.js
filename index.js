import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { RectAreaLightHelper }  from "./three/examples/jsm/helpers/RectAreaLightHelper.js";
import { DragControls } from "./three/examples/jsm/controls/DragControls.js";
// import gsap from './node_modules/gsap';

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(10, 5, 90);
camera.lookAt(0, 0, 0);

const gui = new dat.GUI();

const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.update();
orbitControls.enabled = false;
gui.add(orbitControls, "enabled").name("OribitControls");

const updateCamera = () => {
  // 카메라 투영 매트릭스를 업데이트
  camera.updateProjectionMatrix();
};

let sceneMeshes = [];
//GLTF 파일 로더
const loader = new GLTFLoader();

const dragControls = new DragControls(sceneMeshes, camera, renderer.domElement);
// const boxHelper = new THREE.BoxHelper(gltf.scene, 0xffff00);
// boxHelper.visible = true;
// console.log(boxHelper);
dragControls.addEventListener("hoveron", function () {
  // boxHelper.visible = true;
  orbitControls.enabled = false;
});
dragControls.addEventListener("hoveroff", function () {
  // boxHelper.visible = false;
  orbitControls.enabled = true;
});
dragControls.addEventListener("drag", function (event) {
  event.object.position.y = 0;
});
dragControls.addEventListener("dragstart", function () {
  // boxHelper.visible = true;
  orbitControls.enabled = false;
});
dragControls.addEventListener("dragend", function () {
  // boxHelper.visible = false;
  orbitControls.enabled = true;
});

loader.load(
  // resource URL
  "resources/models/floor_lamp/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    sceneMeshes.push(gltf.scene);
    gltf.scene.castShadow = true;
    gltf.scene.position.set(-35, -20, -35);
    gltf.scene.rotation.set(0, 0, 0);
    gltf.scene.scale.set(0.1, 0.1, 0.1);
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
    sceneMeshes.push(gltf.scene);
    gltf.scene.castShadow = true;
    gltf.scene.position.set(15, -20, -34);
    gltf.scene.rotation.set(0, -0.5 * Math.PI, 0);
    gltf.scene.scale.set(0.05, 0.05, 0.05);
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
    gltf.scene.position.set(15, -11.5, -25);
    gltf.scene.rotation.set(0, 180, 0);
    gltf.scene.scale.set(0.5, 0.5, 0.5);
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
    gltf.scene.position.set(6, 0, -39);
    gltf.scene.rotation.set(0, -0.5 * Math.PI, 0);
    gltf.scene.scale.set(10, 10, 10);
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
    gltf.scene.position.set(-20, 10, -39);
    gltf.scene.rotation.set(0, -0.5 * Math.PI, 0);
    gltf.scene.scale.set(7, 7, 7);
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
  "resources/models/lowpoly_bed/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    sceneMeshes.push(gltf.scene);
    gltf.scene.castShadow = true;
    gltf.scene.position.set(-25, -20, -15);
    gltf.scene.rotation.set(0, 0.5 * Math.PI, 0);
    gltf.scene.scale.set(0.07, 0.07, 0.07);
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
  "resources/models/led_fluorescent_light/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    gltf.scene.castShadow = true;
    gltf.scene.position.set(0, 19, 0);
    gltf.scene.scale.set(15, 15, 15);
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
  "resources/models/closet/scene.gltf",
  // called when the resource is loaded
  (gltf) => {
    gltf.scene.castShadow = true;
    gltf.scene.scale.set(0.15, 0.15, 0.15);
    gltf.scene.position.set(-36, -20, 19);
    gltf.scene.rotation.set(0, Math.PI, 0);
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

// Scene 추가
const scene = new THREE.Scene();

const ballTexture = new THREE.TextureLoader().load("resources/textures/soccerball.jpg");

const ballGeometry = new THREE.SphereGeometry(2, 32, 16);
const ballMaterial = new THREE.MeshBasicMaterial({
  map: ballTexture,
});
const ball = new THREE.Mesh(ballGeometry, ballMaterial);
ball.position.set(0,-18,0);
scene.add(ball);

function bounceBall() {
  gsap.to(ball.position, {
    duration: 1,
    y: -5,
    ease: 'power1.inOut',
    onComplete: () => {
      // 위로 튕긴 후 아래로 내려가는 애니메이션
      gsap.to(ball.position, {
        duration: 1,
        y: -18,
        ease: 'power1.inOut',
        onComplete: bounceBall, // 트윈이 끝나면 다시 bounceBall 함수 호출하여 반복
      });
    },
  });
}

// 초기 애니메이션 시작
bounceBall();


// ambientLight
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// pointLight
const pointLight = new THREE.PointLight(0xffa500, 100, 100);
pointLight.position.set(-35, -6, -35);
pointLight.castShadow = true;
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
scene.add(pointLightHelper);

//rectAreaLight
const rectLight = new THREE.RectAreaLight(0xfdf5e6, 70, 9, 9);
rectLight.position.set(0, 19, 0);
rectLight.lookAt(0, 0, 0);
scene.add(rectLight);

// const rectLightHelper = new RectAreaLightHelper( rectLight );
// rectLight.add( rectLightHelper );

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
const x_planeGeometry = new THREE.PlaneGeometry(80, 80, 2, 2);
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

const wallTexture = new THREE.TextureLoader().load(
  "resources/textures/wall.jpg"
);

// 벽 plane ( y, z )
const wallPaperGeometry = new THREE.PlaneGeometry(80, 40, 2, 2);
const wallPaperMaterial = new THREE.MeshStandardMaterial({
  map: wallTexture,
  side: THREE.DoubleSide,
});

const y_plane = new THREE.Mesh(wallPaperGeometry, wallPaperMaterial);
y_plane.receiveShadow = true;
y_plane.rotation.y = -0.5 * Math.PI;
y_plane.position.x = -40;
y_plane.position.y = 0;
y_plane.position.z = 0;
scene.add(y_plane);

const z_plane = new THREE.Mesh(wallPaperGeometry, wallPaperMaterial);
z_plane.receiveShadow = true;
z_plane.rotation.x = -1 * Math.PI;
z_plane.position.x = 0;
z_plane.position.y = 0;
z_plane.position.z = -40;
scene.add(z_plane);

const wallPaperGeometry2 = new THREE.PlaneGeometry(80, 80, 2, 2);
//천장
const x_plane2 = new THREE.Mesh(wallPaperGeometry2, wallPaperMaterial);
x_plane2.receiveShadow = true;
x_plane2.rotation.x = -0.5 * Math.PI;
x_plane2.position.x = 0;
x_plane2.position.y = 20;
x_plane2.position.z = 0;
scene.add(x_plane2);

let controls, onKeyDown;

const pointerLockControlsOn = () => {
  controls = new PointerLockControls(camera, renderer.domElement);

  const startButton = document.getElementById("startButton");
  const notice = document.getElementById("notice");
  startButton.addEventListener(
    "click",
    () => {
      controls.lock();
    },
    false
  );
  menuPanel.style.display = "block";
  notice.style.display = "none";

  controls.addEventListener("lock", () => {
    menuPanel.style.display = "none";
    notice.style.display = "block";
  });
  controls.addEventListener("unlock", () => {
    menuPanel.style.display = "block";
    notice.style.display = "none";
  });

  onKeyDown = (event) => {
    switch (event.code) {
      case "KeyW":
        controls.moveForward(2);
        break;
      case "KeyA":
        controls.moveRight(-2);
        break;
      case "KeyS":
        controls.moveForward(-2);
        break;
      case "KeyD":
        controls.moveRight(2);
        break;
    }
  };

  document.addEventListener("keydown", onKeyDown, false);
};

const pointerLockControlsOff = () => {
  controls = undefined;
  onKeyDown = undefined;
  menuPanel.style.display = "none";
  notice.style.display = "none";
};

const pointerLockControls = {
  flag: true,
};

gui
  .add(pointerLockControls, "flag")
  .name("포인터락컨트롤")
  .onChange(() => {
    console.log("포인터락컨트롤 값", pointerLockControls.flag);
    if (pointerLockControls.flag) {
      pointerLockControlsOn();
    } else {
      pointerLockControlsOff();
    }
  });

pointerLockControlsOn();

// 카메라의 속성을 변경할 때마다 업데이트
gui.add(camera, "fov", 25, 100).onChange(updateCamera);


const animate = () => {
  requestAnimationFrame(animate);
  // 여기에서 카메라나 물체의 변환을 조작

  renderer.render(scene, camera);
};
animate();
