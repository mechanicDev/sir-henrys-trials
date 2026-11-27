import Phaser from "phaser";

export default class RoyalMeadows extends Phaser.Scene {
  constructor() {
    super("RoyalMeadows");
  }

  preload() {
    this.load.image(
      "royal-meadows-background-01",
      "/assets/environments/royal-meadows/backgrounds/royal-meadows-background-01.png",
    );
    this.load.image(
      "henry-page-idle",
      "/assets/characters/henry-page-idle.png",
    );
    this.load.image(
      "royal-meadows-ground-center",
      "/assets/environments/royal-meadows/terrain/royal-meadows-ground-center.png?v=2",
    );
    // Page Henry running animation
    for (let i = 0; i < 12; i++) {
      const frame = String(i).padStart(4, "0");

      this.load.image(
        `henry-page-run-${frame}`,
        `/assets/characters/henry/page/run/henry-page-run-${frame}.png`,
      );
    }
  }

  create() {
    this.worldWidth = 6400;
    this.worldHeight = 720;

    this.physics.world.setBounds(0, 0, this.worldWidth, this.worldHeight);

    // Royal Meadows background
    this.background = this.add.image(0, 0, "royal-meadows-background-01");

    this.background.setOrigin(0, 0);
    this.background.setScale(720 / this.background.height);
    this.background.setScrollFactor(0.15, 0);
    this.background.setDepth(-10);
    // Ground
    this.ground = this.add.rectangle(
      this.worldWidth / 2,
      660,
      this.worldWidth,
      120,
      0x628b45,
    );

    this.physics.add.existing(this.ground, true);
    this.ground.setVisible(false);

    // Temporary player
    this.player = this.add.rectangle(200, 400, 48, 80, 0xa83232);

    this.physics.add.existing(this.player);

    this.player.body.setCollideWorldBounds(true);

    // Hide the collision rectangle
    this.player.setVisible(false);

    // Visible ground terrain
    const groundImage = this.textures
      .get("royal-meadows-ground-center")
      .getSourceImage();

    const groundScale = 120 / groundImage.height;
    const tileWidth = groundImage.width * groundScale;

    const overlap = 2;

    for (let x = 0; x < this.worldWidth; x += tileWidth - overlap) {
      const tile = this.add.image(x, 600, "royal-meadows-ground-center");

      tile.setOrigin(0, 0);
      tile.setScale(groundScale);
      tile.setDepth(-1);
    }

    this.anims.create({
      key: "henry-page-run",
      frames: Array.from({ length: 12 }, (_, i) => ({
        key: `henry-page-run-${String(i).padStart(4, "0")}`,
      })),
      frameRate: 12,
      repeat: -1,
    });

    // Create Henry's visible sprite
    this.henry = this.add.sprite(
      this.player.x,
      this.player.y,
      "henry-page-idle",
    );

    this.henry.setOrigin(0.5, 1);
    this.henry.setScale(110 / this.henry.height);

    // Collision
    this.physics.add.collider(this.player, this.ground);

    // Elevated platforms
    this.platforms = this.physics.add.staticGroup();

    const platformPositions = [
      { x: 500, y: 550, width: 160 },
      { x: 720, y: 490, width: 160 },
      { x: 940, y: 430, width: 180 },
      { x: 1250, y: 550, width: 200 },
    ];

    platformPositions.forEach(({ x, y, width }) => {
      const platform = this.add.rectangle(x, y, width, 20, 0x795548);

      this.platforms.add(platform);
    });

    this.physics.add.collider(this.player, this.platforms);

    // Keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();

    this.keys = this.input.keyboard.addKeys("A,D,SPACE");

    this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight);

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
  }

  update() {
    const body = this.player.body;

    body.setVelocityX(0);

    if (this.cursors.left.isDown || this.keys.A.isDown) {
      body.setVelocityX(-300);
    }

    if (this.cursors.right.isDown || this.keys.D.isDown) {
      body.setVelocityX(300);
    }

    const jumpPressed =
      Phaser.Input.Keyboard.JustDown(this.keys.SPACE) ||
      Phaser.Input.Keyboard.JustDown(this.cursors.up);

    if (jumpPressed && body.blocked.down) {
      body.setVelocityY(-460);
    }
    // Synchronize artwork with the physics body
    this.henry.setPosition(
      this.player.x,
      this.player.y + this.player.height / 2,
    );

    // Face the direction of movement
    if (body.velocity.x < 0) {
      this.henry.setFlipX(true);
    } else if (body.velocity.x > 0) {
      this.henry.setFlipX(false);
    }

    // Character animation
    if (body.velocity.x !== 0 && body.blocked.down) {
      this.henry.play("henry-page-run", true);
      this.henry.setScale(0.2415);
      this.henry.setOrigin(0.5, 0.85);
    } else {
      this.henry.stop();
      this.henry.setTexture("henry-page-idle");
      this.henry.setScale(110 / this.henry.height);
      this.henry.setOrigin(0.5, 1);
    }
  }
}
