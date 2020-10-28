var snake,
    grid = [],
    cellSize = 20,
    lastKeyPress,
    isDead = false,
    food,
    score;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < ceil(width / cellSize); i++) {
    grid[i] = [];
    for(let j = 0; j < ceil(height / cellSize); j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
  snake = new Snake(ceil(width / 2 / cellSize), ceil(height / 2 / cellSize));
  food = new Food(ceil(random(0, width / cellSize)), ceil(random(0, height / cellSize)));
  frameRate(15);
}

function draw() {
  
  background(0);
  for(let i = 0; i < floor(width / cellSize); i++) {
    for(let j = 0; j < floor(height / cellSize); j++) {
      var cell = grid[i][j];
      if(snake.x == cell.x && snake.y == cell.y) {
        if(cell.content instanceof Food) {
          snake.eat();
          food = new Food(ceil(random(0, width / cellSize)), ceil(random(0, height / cellSize)));
        }
        cell.content = snake;
      } else if(food.x == cell.x && food.y == cell.y) {
        cell.content = food;
      } else {
        cell.content = null;
      }
      if(snake.tails.length > 0) {
        var tails = snake.tails;
        for(let k = 0; k < tails.length; k++) {
          if(cell.x == tails[k][0] && cell.y == tails[k][1]) {
            cell.content = tails;
          }
        }
      }
      cell.show();
    }
  }
  snake.move(lastKeyPress);
  if(isDead) {
    noLoop();
    background(255, 120, 120, 255);
    score = createP(`Score : ${snake.tails.length}`);
    score.style("font-size", "24px");
    score.position(width / 2, height / 2);
    
  }
}

function keyPressed() {
  if(key.indexOf("Arrow") != -1) {
    lastKeyPress = key.replace('Arrow', '');
  }
}