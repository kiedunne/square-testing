describe("Square", function() {

  beforeEach(function() {
    square = new Square(5)
  });

  it("Calculates area of the square", function() {
    square.calculateArea()
    expect(square.area).toEqual(25);
  });

});
