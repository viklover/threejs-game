import * as THREE from "three";

import Game from '../../../Game'
import GameObject from "../GameObject";

export default class Camera implements GameObject {

  private instance: THREE.PerspectiveCamera;

  constructor(fov: number, near: number, far: number) {
    this.instance = new THREE.PerspectiveCamera(
      fov,
      Game.sizes.width / Game.sizes.height,
      near,
      far
    );
    this.instance.position.set(0, 3, 15);
  }

  public setPosition(x: number, y: number, z: number) {
    this.instance.position.set(x, y, z);
  }

  public resize() {
    this.instance.aspect = Game.sizes.width / Game.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  public update() {}
}
