<template>
  <div ref="canvas"></div>
</template>

<script>
import p5 from 'p5';

export default {
  name: "DXBallHome",
  mounted() {
    new p5(this.sketch, this.$refs.canvas);
  },
  methods: {
    sketch(p) {
      var blockManager;
      var paddle;
      var ball;
      var gameManager;

      class BlockManager {

        constructor(windowWidth, windowHeight, numLayers, minBlocks, maxBlocks, widthPercentage, heightPercentage) {
          this.windowWidth = windowWidth;
          this.windowHeight = windowHeight;
          this.numLayers = numLayers;
          this.minBlocks = minBlocks;
          this.maxBlocks = maxBlocks;
          this.widthPercentage = widthPercentage;
          this.heightPercentage = heightPercentage
          this.blocks = [];
        }

        generateBlocks() {

          let numBlocks;
          let prevNumBlocks = 0;
          let blockWidth = (this.windowWidth * this.widthPercentage) / 100;
          let blockHeight = (this.windowHeight * this.heightPercentage) / 100;
          let blockY = (this.windowHeight * 1) / 100;

          while (this.numLayers > 0) {
            numBlocks = Math.floor(Math.random() * (this.maxBlocks - this.minBlocks + 1)) + this.minBlocks;
            if (numBlocks % 2 !== 0 && prevNumBlocks !== numBlocks) {

              let blockX = (this.windowWidth / 2) - (Math.floor(numBlocks / 2) * blockWidth) - (blockWidth / 2);
              let r = Math.floor(Math.random() * 256);
              let g = Math.floor(Math.random() * 256);
              let b = Math.floor(Math.random() * 256);

              for (let j = 0; j < numBlocks; j++) {
                this.blocks.push({
                  x: blockX,
                  y: blockY,
                  width: blockWidth,
                  height: blockHeight,
                  r: r,
                  g: g,
                  b: b,
                  isActive: true
                })
                blockX += blockWidth;
              }
              blockY += blockHeight;
              this.numLayers -= 1;
              prevNumBlocks = numBlocks
            }
          }
        }
      }

      class Paddle {
        constructor(windowWidth, windowHeight, widthPercentage, yOffsetPercentage, height) {
          this.windowWidth = windowWidth;
          this.width = (windowWidth * widthPercentage) / 100;
          this.height = height;
          this.yOffset = (windowHeight * yOffsetPercentage) / 100;
          this.position = p.createVector(windowWidth / 2 - this.width / 2, windowHeight - this.yOffset - this.height);
          // this.speed = (windowWidth * 50) / 100;
        }

        move(mouseX) {
          let xPos = mouseX;

          if (xPos < 0) xPos = 0;
          else if (xPos + this.width > this.windowWidth) xPos = this.windowWidth - this.width;

          this.position.x = xPos;
        }
      }

      class Ball {
        constructor(windowWidth, windowHeight, diameter) {
          this.diameter = diameter;

          this.x = p.random(paddle.position.x, paddle.position.x + paddle.width);
          this.y = paddle.position.y - this.diameter / 2;

          let speedScale = p.sqrt(windowWidth * windowHeight) / 100;
          this.speedX = 20 * speedScale;
          this.speedY = -this.speedX;
        }

        move(deltaTime) {
          let hitInfo = null;
          hitInfo = p.circRect(this.x, this.y, this.diameter / 2, paddle.position.x, paddle.position.y, paddle.width, paddle.height);

          if (hitInfo === null) {
            for (let i = 0; i < blockManager.blocks.length; i++) {
              let block = blockManager.blocks[i];
              if (block.isActive) hitInfo = p.circRect(this.x, this.y, this.diameter / 2, block.x, block.y, block.width, block.height);
              if (hitInfo !== null) {
                block.isActive = false;
                break;
              }
            }
          }

          if (hitInfo === "top" || hitInfo === "bottom") this.speedY *= -1;
          if (hitInfo === "left" || hitInfo === "right") this.speedX *= -1;

          // Check the sides of the screen
          if (this.x - this.diameter / 2 <= 0 || this.x + this.diameter / 2 >= p.windowWidth) this.speedX *= -1;
          if (this.y - this.diameter / 2 <= 0) this.speedY *= -1;

          this.x += this.speedX * (deltaTime / 1000);
          this.y += this.speedY * (deltaTime / 1000);
        }
      }

      class GameManager {

        startNewGame() {
          blockManager = new BlockManager(p.windowWidth, p.windowHeight, 12, 7, 19, 4, 5);
          blockManager.generateBlocks();

          paddle = new Paddle(p.windowWidth, p.windowHeight, 25, 0.5, 20);

          ball = new Ball(p.windowWidth, p.windowHeight, 20)
        }

        isGameOver(windowWidth, windowHeight) {
          if (ball.y > paddle.position.y + ball.diameter / 2) {
            ball.speedX = 0;
            ball.speedY = 0;
            this.startNewGame();
          }
        }
      }

      p.setup = () => {
        gameManager = new GameManager();
        gameManager.startNewGame();

        // document.body.style.overflow = "hidden";
        p.createCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        p.background(50);

        for (let i = 0; i < blockManager.blocks.length; i++) {
          let block = blockManager.blocks[i];
          p.stroke(255);
          p.fill(block.r, block.g, block.b);
          if (block.isActive) p.rect(block.x, block.y, block.width, block.height);
        }

        p.noStroke();
        p.fill(255);

        paddle.move(p.mouseX);
        p.rect(paddle.position.x, paddle.position.y, paddle.width, paddle.height);

        p.fill(255, 0, 0);
        ball.move(p.deltaTime);
        p.ellipse(ball.x, ball.y, ball.diameter);

        gameManager.isGameOver(p.windowWidth, p.windowHeight);
      };

      p.circRect = (cx, cy, rad, rx, ry, rw, rh) => {
        let testX = cx;
        let testY = cy;
        let hit;

        // test left edge
        if (cx < rx) {
          testX = rx;
          hit = "left";
        }
        // right edge
        else if (cx > rx + rw) {
          testX = rx + rw;
          hit = "right";
        }
        // top edge
        if (cy < ry) {
          testY = ry;
          hit = "top";
        }
        // bottom edge
        else if (cy > ry + rh) {
          testY = ry + rh;
          hit = "bottom";
        }

        let d = p.dist(cx, cy, testX, testY);

        if (d <= rad) {
          return hit;
        }
        return null;
      }
    },
  },
};
</script>
