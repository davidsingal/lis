import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import earthModel from './DamagedHelmet.gltf';

class ModelViewer {
  createScenario = () => {
    const width = this.element.clientWidth;
    const height = this.element.clientHeight;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;

    // Scene
    const scene = this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.01,
      100
    );
    this.camera.position.z = 5;

    // Ambient light
    const ambientLight	= new THREE.AmbientLight(0x999999);
    this.scene.add(ambientLight);

    // Directional light
    var light	= new THREE.DirectionalLight(0x666666, 1);
    light.position.set(5, 3, 5);
    this.scene.add(light);

    // Adding to DOM
    this.element.appendChild(this.renderer.domElement);

    var loader = new GLTFLoader();

    loader.load(earthModel, (gltf) => {
      console.log(gltf);
      // scene.add(gltf.scene);
    }, undefined, function ( error ) {

      console.error( error );

    });

    // Adding object to scene
    // const geometry   = new THREE.SphereGeometry(0.5, 32, 32);
    // const material = this.material = new THREE.MeshPhongMaterial({
    //   map: new THREE.TextureLoader().load(this.basemapUrl || earthNoClouds),
    //   bumpMap: new THREE.TextureLoader().load(earthBumpElevation),
    //   bumpScale: 0.007,
    //   specularMap: new THREE.TextureLoader().load(earthWater),
    //   specular: new THREE.Color('grey'),
    // });

    // this.earthMesh = new THREE.Mesh(geometry, material);
    // this.scene.add(this.earthMesh);

    // // Galaxy background
    // const galaxyGeometry  = new THREE.SphereGeometry(100, 32, 32);
    // const galaxyMaterial  = new THREE.MeshBasicMaterial({
    //   map: new THREE.TextureLoader().load(galaxy),
    //   side: THREE.BackSide,
    // });
    // this.galaxyMesh  = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
    // this.scene.add(this.galaxyMesh);

    // Controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.update();
  }

  setElement = (element) => {
    this.element = element;
  }

  setBasemapUrl = (basemapUrl) => {
    // this.material.map = new THREE.TextureLoader().load(basemapUrl);
  }

  resetBasemap = (basemapUrl) => {
    // this.material.map = new THREE.TextureLoader().load(earthNoClouds);
  }

  start = (element) => {
    if (element) this.setElement(element);
    this.createScenario();

    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId);
  }

  animate = () => {
    // this.earthMesh.rotation.y += 0.0005;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  }
}

export default ModelViewer;
