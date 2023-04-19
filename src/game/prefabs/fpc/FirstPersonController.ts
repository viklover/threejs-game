import GameObject from "../../engine/object/GameObject";
import Camera from "../../engine/object/camera/Camera";
import CamerasManager from "../../engine/scene/CamerasManager";

export default class FirstPersonController extends GameObject {

  constructor() {
    super();

    const camera = new Camera('player', 50, 0.1, 100);
    this.add(camera);

    CamerasManager.getCurrentManager().set('main')
  }
}
