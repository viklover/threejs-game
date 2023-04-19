import * as THREE from 'three';

import Game from "../../Game";
import ScenesManager from "../scene/ScenesManager";

export default class Renderer {

  private instance: THREE.WebGLRenderer;

  constructor() {
    this.instance = new THREE.WebGLRenderer({
      canvas: Game.canvas
    })
  }

  public resize() {
    this.instance.outputEncoding = THREE.sRGBEncoding;
    // this.instance.toneMapping = THREE.CineonToneMapping;
    // this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFShadowMap;

    this.instance.setSize(Game.sizes.width, Game.sizes.height);
    this.instance.setPixelRatio(Math.min(Game.sizes.pixelRatio, 2));
  }

  public update() {
    const scene = ScenesManager.getCurrentScene();

    this.instance.render(
      scene.instance, scene.cameras.current
    );
  }
}
