import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import * as dat from "dat.gui"
import bg1 from "./images/istockphoto-157639696-612x612.jpg"
import bg2 from "./images/8bc76164aea807efd5afdde84636048f.jpg"

const ThreeScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    const orbit = new OrbitControls(camera, renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Geometry setup (example: cube)
    const geometry = new THREE.BoxGeometry(1,2,8);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00
     });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    //Axis Helper
    const axeshelper = new THREE.AxesHelper(5);
    scene.add(axeshelper);

    // Creating a Plane
    const planeGeometry = new THREE.PlaneGeometry(30,30);
    const planeMaterail = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterail);
    scene.add(plane);
    plane.rotation.x = -0.5 * Math.PI;
    plane.receiveShadow = true;

    // Creating Grid 
    const gridHelper = new THREE.GridHelper(30);
    scene.add(gridHelper);

    // Camera position
    camera.position.set(-10, 30, 40);
    orbit.update();

    const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x0000FF,
      wireframe: false,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.set(-10, 10, 0);
    sphere.castShadow = true;

    const ambientLight = new THREE.AmbientLight(0xAAAAAA);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    scene.add(directionalLight);
    directionalLight.position.set(-30, 50, 0);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.bottom = -10;

    const dLightHelper = new THREE.DirectionalLightHelper(directionalLight,5);
    scene.add(dLightHelper);

    const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    scene.add(dLightShadowHelper);

    const textureLoader = new THREE.TextureLoader();
    // scene.background = textureLoader.load(bg1);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      bg1,
      bg1,
      bg1,
      bg2,
      bg2,
      bg2
    ]);

    const box2Geometry = new THREE.BoxGeometry(4, 4, 4);
    const box2Material = new THREE.MeshBasicMaterial({
      // color: 0x00FF00,
      map: textureLoader.load(bg1)
    });
    const box2MultiMaterial = [
      new THREE.MeshBasicMaterial({map: textureLoader.load(bg1)}),
      new THREE.MeshBasicMaterial({map: textureLoader.load(bg1)}),
      new THREE.MeshBasicMaterial({map: textureLoader.load(bg1)}),
      new THREE.MeshBasicMaterial({map: textureLoader.load(bg2)}),
      new THREE.MeshBasicMaterial({map: textureLoader.load(bg2)}),
      new THREE.MeshBasicMaterial({map: textureLoader.load(bg2)}),
    ]
    const box2 = new THREE.Mesh(box2Geometry, box2MultiMaterial);
    scene.add(box2);
    box2.position.set(0, 15, 10);

    const mousePosition = new THREE.Vector2();
    
    window.addEventListener('mousemove', function(e){
      mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    const rayCaster = new THREE.Raycaster();

    const sphereId = sphere.id;
    box2.name = 'theBox';

    // Dat GUI instance creation

    const gui = new dat.GUI();
    const options = {
      sphereColor : '#ffea00',
      wireframe: false,
      speed: 0.01
    };

    gui.addColor(options,'sphereColor').onChange((e) => {
      sphere.material.color.set(e)
    })
    gui.add(options, 'wireframe').onChange((e) => {
      sphere.material.wireframe = e;
    })
    gui.add(options,'speed',0,0.1);

    // dat gui ends here
    
    let step = 0;
    // Render loop
    const animate = () => {
      // requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      step += options.speed;
      sphere.position.y = 10 * Math.abs(Math.sin(step));
      rayCaster.setFromCamera(mousePosition, camera);
      const intersects = rayCaster.intersectObjects(scene.children);
      for(let i = 0; i < intersects.length; i++) {
        if(intersects[i].object.id == sphereId){
          intersects[i].object.material.color.set(0x00FF00);
        }
        if(intersects[i].object.name == 'theBox'){
          intersects[i].object.rotation.x += 0.01;
          intersects[i].object.rotation.y += 0.01;
        }
      }
      renderer.render(scene, camera);
      // console.log(intersects);
    };
    renderer.setAnimationLoop(animate);
    // animate();

    window.addEventListener('resize', function(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    })

    // Clean-up
    return () => {
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef}>
    {/* <img src={bg1} alt="" /> */}
  </div>;
};

export default ThreeScene;
