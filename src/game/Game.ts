import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import Renderer from './engine/renderer/Renderer';
import ScenesManager from './engine/scene/ScenesManager';
import Sizes from './engine/sizes/Sizes';
import Time from './engine/time/Time';

export default class Game {

  public static canvas: HTMLCanvasElement;

  public static time: Time;
  public static sizes: Sizes;

  public static renderer: Renderer;
  public static controls: OrbitControls;

  public static started: boolean = false;

  public static init(canvas: HTMLCanvasElement | null) {

    this.canvas = canvas!;

    this.time = new Time();
    this.sizes = new Sizes();
    this.renderer = new Renderer();

    ScenesManager.init();

    // TODO: replace conrtol to another module
    this.controls = new OrbitControls(ScenesManager.getCurrentScene().cameras.current, canvas!);
    this.controls.enableDamping = true;

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("tick", () => {
      this.update();
    });

    Game.started = true;
    
    this.sizes.update();
  }

  public static resize() {
    this.renderer.resize();

    ScenesManager.getCurrentScene().resize();
  }

  public static update() {
    this.controls.update();
    this.renderer.update();

    ScenesManager.getCurrentScene().update();
  }
}
