import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');
    this.add.image(GAME_WIDTH - 68, GAME_HEIGHT - 34, 'logo').setScale(0.3);

    this.gameBtn = this.add.image(110, 50, 'back').setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(1.1);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(1);
    });

    const authorText = this.make.text({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2 - 50,
      text: 'Author:',
      style: {
        font: '30px monospace',
        fill: '#465115',
      },
    });

    authorText.setOrigin(0.5, 0);
    const heroText = this.make.text({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2 + 50,
      text: 'Arslan Bisharat',
      style: {
        font: '30px Arial',
        fill: '#465115',
      },
    });
    heroText.setOrigin(0.5, 0);
  }
}