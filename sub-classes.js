class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}
class Square extends Shape {
  constructor(sides) {
    super();
    this.sides = sides;
  }
  getNumberOfSides() {
    return this.sides;
  }
}

let sq1 = new Square(4);
sq1.height = 10;
console.log(sq1.getHeight());
