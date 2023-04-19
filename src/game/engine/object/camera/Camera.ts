import * as THREE from "three";

import Game from '../../../Game';
import GameObject from "../GameObject";
import ScenesManager from "../../scene/ScenesManager";

export default class Camera extends GameObject {

  public instance: THREE.PerspectiveCamera;

  constructor(name: string, fov: number, near: number, far: number) {
    super();

    this.instance = new THREE.PerspectiveCamera(
      fov,
      Game.sizes.width / Game.sizes.height,
      near,
      far
    );
    this.instance.position.set(0, 0, 0);

    ScenesManager.getCurrentScene().cameras.add(name, this);
  }

  public resize() {
    super.resize();

    this.instance.aspect = Game.sizes.width / Game.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  public setPosition(x: number, y: number, z: number) {
    this.instance.position.set(x, y, z);
  }

  public setRotation(x: number, y: number, z: number) {
    this.instance.rotation.set(x, y, z);
  }
}
