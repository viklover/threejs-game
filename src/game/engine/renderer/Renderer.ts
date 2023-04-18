import Game from "../../Game";

export default class Renderer {

  private instance: THREE.WebGLRenderer;

  
  resize() {
    this.instance.setSize(Game.sizes.width, Game.sizes.height);
    this.instance.setPixelRatio(Math.min(Game.sizes.pixelRatio, 2));
  }

  update() {
    // this.instance.render(Game.scene, Game.camera.instance);
  }
}
