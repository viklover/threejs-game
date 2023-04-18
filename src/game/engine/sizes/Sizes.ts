import EventEmitter from "../EventEmmiter";

export default class Sizes extends EventEmitter {
  
  public width: number;
  public height: number;

  public pixelRatio: number;

  constructor() {
    super();
    
    this.update();

    window.addEventListener("resize", this.update);
  }

  update() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }
}
