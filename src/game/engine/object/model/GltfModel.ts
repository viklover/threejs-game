import * as THREE from 'three';

import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import GameObject from "../GameObject";


export default class GltfModel extends GameObject {

  constructor(path: string) {
    super();
    
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(path, (object) => {
      this.addThreeJsObject(object.scene);
    });
  }
}
