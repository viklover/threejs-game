import * as THREE from 'three'

import Camera from "../object/camera/Camera";
import ScenesManager from './ScenesManager';

export default class CamerasManager {

  private cameras: {[key: string]: Camera} = {};

  public current: THREE.Camera;

  public add(name: string, camera: Camera) {

    if (name in this.cameras)
      throw new Error(`Camera with name '${name}' already exists. You can't add camera with the same name`)

    this.cameras[name] = camera;

    if (Object.keys(this.cameras).length == 1)
      this.current = camera.instance;
  }

  public set(name: string) {

    if (!(name in this.cameras))
      throw new Error(`Scene with name '${name}' not found`);

    this.current = this.cameras[name].instance;
  }

  public static getCurrentManager(): CamerasManager {
    return ScenesManager.getCurrentScene().cameras
  }
}
