function Square(sideLength) {
  this.sideLength = sideLength,
  this.area = 0
};

Square.prototype.calculateArea = function() {
  this.area = Math.pow(this.sideLength,2)
};
