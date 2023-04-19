import * as THREE from 'three'

import Camera from '../engine/object/camera/Camera';
import Scene from '../engine/scene/Scene';
import GltfModel from '../engine/object/model/GltfModel';

export default class MainScene extends Scene {

  public init() {

    const house = new GltfModel('models/Winter House/scene.gltf');
    this.add(house);

    const camera = new Camera('main', 50, 0.01, 100);
    camera.setPosition(0, 10, 0);
    camera.setRotation(80, 0, 0);
    this.add(camera)

    const directionalLight = new THREE.DirectionalLight(0xaa75ff, 1); //0x1a75ff
    // directionalLight.position.set(2, 100, -1);
    this.instance.add(directionalLight);

    const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 10, 10);
    this.instance.add(rectAreaLight)
  }
}
