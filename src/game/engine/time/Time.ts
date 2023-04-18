import EventEmitter from '../EventEmmiter';
import Delta from './Delta'

export default class Time extends EventEmitter {

  private delta: Delta;

  constructor() {
    super();

    this.delta = new Delta();

    window.requestAnimationFrame(this.tick);
  }

  tick() {
    this.delta.update();

    window.requestAnimationFrame(this.tick);
  }
}
