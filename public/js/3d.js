import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
let clock = new THREE.Clock();
scene.background = new THREE.Color(0x01021f);


const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000);

camera.position.set(0, 0, -5);


const hlight = new THREE.AmbientLight(0xffffff,100);
scene.add(hlight);

const renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#world").append(renderer.domElement);

var controls = new OrbitControls( camera, renderer.domElement )
controls.update();
let mixer
let model;
const loader = new GLTFLoader();

const init = async () => {
    await loader.load("../media/models/scene.gltf", function(gltf) {
        model = gltf.scene;
        model.position.set(0, 0, 0);
        //gltf.scene.scale.set(2, 2, 2);
        //mixer = new THREE.AnimationMixer(model);
        //const play = mixer.clipAction(gltf.animations[0]);
        //play.play();
        scene.add(model);
        camera.lookAt(model.position);
    });
    document.querySelector(".loader").innerHTML = "";
}

const animate = () => {
     requestAnimationFrame(animate);
    //let delta = clock.getDelta();
    //if(mixer) mixer.update(delta);
    model.rotation.y += 0.01
    controls.update();
    renderer.render(scene, camera);
    //console.log(camera.position);
}

init();
animate();