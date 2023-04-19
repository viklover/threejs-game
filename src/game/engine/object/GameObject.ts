import * as THREE from 'three';

export default abstract class GameObject {

  public readonly body: THREE.Group;

  public childs: GameObject[] = [];

  constructor() {
    this.body = new THREE.Group();
  }

  public add(child: GameObject) {
    this.childs.push(child);
    this.body.add(...child.getThreeJsObjects());
  }

  public addThreeJsObject(object: THREE.Object3D) {
    this.body.add(object);
  }

  public update() {
    this.childs.forEach(
      child => child.update()
    );
  }

  public resize() {
    this.childs.forEach(
      child => child.resize()
    );
  }

  public setPosition(x: number, y: number, z: number) {
    this.body.position.set(x, y, z);
  }

  public setRotation(x: number, y: number, z: number) {
    this.body.rotation.set(x, y, z);
  }

  public getThreeJsObjects(): THREE.Object3D[] {
    
    const objects: THREE.Object3D[] = [];

    this.childs.forEach(child => 
      objects.push(...child.getThreeJsObjects())
    );

    return objects;
  }
}
