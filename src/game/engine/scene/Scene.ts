import * as THREE from 'three';

import GameObject from '../object/GameObject';
import CamerasManager from './CamerasManager';

export default abstract class Scene {

  public readonly instance: THREE.Scene;

  public readonly cameras: CamerasManager;

  public isInitilized: boolean = false;

  private readonly objects: GameObject[] = [];

  constructor() {
    this.instance = new THREE.Scene();
    this.cameras = new CamerasManager();
  }  

  public add(object: GameObject) {
    this.objects.push(object);
    this.instance.add(object.body);
  }

  public update() {
    this.objects.forEach(
      object => object.update()
    );
  }

  public resize() {
    this.objects.forEach(
      object => object.resize()
    );
  }

  public abstract init(): void;
}
