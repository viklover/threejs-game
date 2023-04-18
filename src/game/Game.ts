import Renderer from './engine/renderer/Renderer'
import Sizes from './engine/sizes/Sizes';
import Time from './engine/time/Time'

export default class Game {

  public static canvas: HTMLInputElement | null;

  public static time: Time;
  public static sizes: Sizes;

  public static renderer: Renderer;

  public static init(canvas: HTMLInputElement | null) {

    this.canvas = canvas;

    this.time = new Time();
    this.sizes = new Sizes();
    this.renderer = new Renderer();

    this.sizes.on("resize", this.resize);
    this.time.on("tick", this.update);
  }

  public static resize() {
    // this.camera.resize();
    this.renderer.resize();
  }

  public static update() {
    // this.camera.update();
    this.renderer.update();
  }
}
