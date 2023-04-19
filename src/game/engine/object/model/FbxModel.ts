import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

import GameObject from "../GameObject";

export default class FbxModel extends GameObject {

  constructor(path: string) {
    super();
    
    const fbxLoader = new FBXLoader();
    
    fbxLoader.load(
      path,
      (object) => {
          this.body.add(object)
      },
      (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
          console.log(error)
      }
    )
  }
}
