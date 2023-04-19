import Game from './game/Game';
import ScenesManager from './game/engine/scene/ScenesManager';

import MainScene from './game/scenes/MainScene';

import './styles/index.scss';

// Adding scene to the scene manager
ScenesManager.add('main', new MainScene());
ScenesManager.set('main');

// Initilizing game engine
Game.init(document.querySelector<HTMLCanvasElement>("canvas.webgl"));
