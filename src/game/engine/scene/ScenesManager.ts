import Game from '../../Game';
import Scene from './Scene';

export default class ScenesManager {

  private static scenes: {[key: string]: Scene} = {};
  private static currentScene: Scene;

  public static init() {
    if (!this.currentScene.isInitilized) {
      this.currentScene.init()
      this.currentScene.isInitilized = true;
    }
  }

  public static add(name: string, scene: Scene) {

    if (name in this.scenes)
      throw new Error(`Scene with name '${name}' already exists. You can't add scene with the same name`);

    this.scenes[name] = scene;
  }

  public static set(name: string) {

    if (!(name in this.scenes))
      throw new Error(`Scene with name '${name}' not found`);

    this.currentScene = this.scenes[name];

    if (Game.started)
      this.init();
  }

  public static getCurrentScene(): Scene {
    return this.currentScene;
  }
}
