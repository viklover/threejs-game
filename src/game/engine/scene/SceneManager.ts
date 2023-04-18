import Scene from './Scene'

export default class SceneManager {

  private static scenes: {[key: string]: Scene} = {};
  private static currentScene: string;

  public static add(name: string, scene: Scene) {

    if (name in this.scenes)
      throw new Error(`Scene with name '${name}' already exists. You can't add scene with the same name`);

    this.scenes[name] = scene;
  }

  public static set(name: string) {

    if (!(name in this.scenes))
      throw new Error(`Scene with name '${name}' not found`)

      this.currentScene = name;
  }

  public static getCurrentScene(): Scene {
    return this.scenes[this.currentScene];
  }
}
