var snake;
var food;
var score;
function setup() {
  var canvas = createCanvas(500,400);
  snake = createSprite(200,300,20,20);
  food = createSprite(200,200,20,20);
  snake.shapeColor = "green"
  score = 0;
}

function draw() {
  background("black");
  // textsize(15);
  text("score : ",20,20);
  text(score,60,20);
  if (keyCode === UP_ARROW){
    snake.velocityY =  - 5;
    snake.velocityX =  0;
} 
if (keyCode === DOWN_ARROW) {
  snake.velocityY = + 5;
  snake.velocityX =  0
}
if (keyCode === RIGHT_ARROW) {
  snake.velocityX =  + 5;
  snake.velocityY =  0;
}
if (keyCode === LEFT_ARROW) {
  snake.velocityX = - 5;
  snake.velocityY =  0;
}
if(snake.isTouching(food)){
food.y = Math.round(random(30,370));
food.x = Math.round(random(30,470));
snake.width = snake.width + 5;
score = score + 1;
}
if(score === 5){
  snake.destroy();
  food.destroy();
  text("YOU WON!!",200,230);
}
if(snake.y>400 || snake.y<0 || snake.x>500 || snake.x<0){
  snake.destroy();
  food.destroy();
  text("GAME OVER",200,230);
}
drawSprites();
}

  
