// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'https://unpkg.com/three@0.162.0/build/three.module.js';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models


let scene, camera, renderer, capsule;

function init(){

    scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff,3);
    light.position.set(3,8,5);
    scene.add(light);

    const helper = new THREE.DirectionalLightHelper(light, 5);
    scene.add(helper);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models

    // idk why mia isn't affected by the light I think it might be her texture sint affected by it maybe??
    loader.load('assets/anime_girl_mia_dancing_preview.glb',function (gltf){
        const mia = gltf.scene
        scene.add(mia)
        
        mia.setscale = 0.5;
        mia.position.y = 1.45;
        

    })
    
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('textures/grasslight-big.jpg', );

    const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
    const material = new THREE.MeshStandardMaterial({ map: texture }); 
    capsule = new THREE.Mesh( geometry, material );
    scene.add( capsule );
    
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate); 

   
    capsule.rotation.x += 0.000;
    capsule.rotation.y += 0.007;
    

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate(); 
