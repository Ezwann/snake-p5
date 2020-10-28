class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.content = null;
  }

  show() {
    stroke(0);
    if((this.content != null && this.content instanceof Snake) || (this.content != null && this.content instanceof Array)) {
      fill(255);
      rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
    } else if(this.content != null && this.content instanceof Food) {
      fill(255,0,0,255);
      rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
    }
  }
}