class Snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tails = [];
  }

  move(dir) {
    switch (dir) {
      case "Up":
        this.moveTail();
        this.y -= 1;
        this.die();
        break;
      case "Down":
        this.moveTail();
        this.y += 1;
        this.die();
        break;
      case "Left":
        this.moveTail();
        this.x -= 1;
        this.die();
        break;
      case "Right":
        this.moveTail();
        this.x += 1;
        this.die();
        break;
      default:
        break;
    }
  }

  moveTail() {
    if(this.tails.length > 0) {
      this.tails.push([this.x, this.y])
      this.tails.shift();
    }
  }

  eat() {
    this.tails.push([this.x, this.y])
  }

  die() {
    let gridRows = grid.length,
        gridCols = grid[gridRows - 1].length;
    if(this.x < 0 || this.y < 0 || this.x > gridRows || this.y > gridCols) {
      isDead = true;
    }
    if(this.tails.length > 0) {
      var tails = this.tails;
      for(let k = 0; k < tails.length; k++) {
        var tail = tails[k];
        if(this.x == tail[0] && this.y == tail[1]) isDead = true;
      }
    }
  }
}