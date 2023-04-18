import GameObject from '../object/GameObject';

export default abstract class Scene {

  private objects: GameObject[] = [];

  public update() {
    this.objects.forEach(object => object.update())
  }
}
