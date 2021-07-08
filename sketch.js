
var path;
var pathImg;
var Runner;
var runnerImg;
var left_Boundary;
var right_Boundary;
var coin;
var coinImg;
var CoinScore = "0";
var running;

function preload() {
  //pre-load images
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
  coinImg = loadImage("coin.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  Runner = createSprite(180, 200, 50, 170);
  Runner.addAnimation("running", runnerImg);
  Runner.scale = 5

  coin = createSprite(200, 200, 80, 90);
  coin.addImage(coinImg);
  coin.scale = 0.2;

  coin = createSprite(300, 200, 80, 90);
  coin.addImage(coinImg);
  coin.scale = 0.2;

  coin = createSprite(100, 200, 80, 90);
  coin.addImage(coinImg);
  coin.scale = 0.2;

  left_Boundary = createSprite(0, 300, 100, 600);
  right_Boundary = createSprite(390, 300, 80, 600);
  left_Boundary.visible = false;
  right_Boundary.visible = false;

}

function draw() {
  background(0);

  text("Coin Score:0", 50, 50);
  textSize(10);

  Runner.x = World.mouseX;

  if (path.y > 400) {
    path.y = height / 2;
  }

  if (Runner.isTouching(coin)) {
    CoinScore = CoinScore + 1;
  }

  Runner.collide(left_Boundary);
  Runner.collide(right_Boundary);

  edges = createEdgeSprites();
  Runner.collide(edges[3]);
  drawSprites();
}
